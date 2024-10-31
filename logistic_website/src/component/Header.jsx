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

  return (
    <div id='header'>
        <div id='company'>
            <p className='companyName'>CAFECOLD</p>
            <p className='companyTitle'>From frost to freight. Always Cool.</p>
        </div>

        {isMobileOrTablet ? <NavSidebar/> :
        <div id='nav'>
        
            <Link className='navlinks' to="/">Home</Link>
            <Link className='navlinks' to="/about">About</Link>
            <Link className='navlinks' to="/strategy">Strategy</Link>
            <Link className='navlinks' to="/career">Career</Link>
            <Link className='navlinks' to="/contact">Contact</Link>
          
        </div>}
    </div>
  )
}

export default Header