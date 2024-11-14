// Career.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Career = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header />

    <div className='bg2'>

      <div>
        <div id='careerContainer' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div className='career'>
            <h2>Working at CafeCold</h2>
            <p>Join the CafeCold team and immerse yourself in a vibrant workplace dedicated to excellence in cold chain logistics. We foster a culture of collaboration, innovation, and sustainability, ensuring that every team member contributes to our mission. With opportunities for growth, professional development, and a supportive environment, you'll be empowered to make an impact. Experience the unique blend of passion and purpose—come grow with us at CafeCold!</p>
          </div>
          <div className='career'>
            <h2>Company Culture</h2>
            <p>At CafeCold, our company culture is built on collaboration, innovation, and sustainability. We foster an inclusive environment where every voice is heard and valued. Teamwork drives our success, and we encourage creative thinking to solve challenges in cold chain logistics. Our commitment to professional development ensures that employees have the tools and support to grow in their careers. Together, we celebrate achievements and strive for excellence while making a positive impact on our industry and the environment. Join us in creating a culture where passion meets purpose!</p>
          </div>
          <div className='career'>
            <h2>Opportunities for Professionals</h2>
            <p>At CafeCold, we offer diverse opportunities for professionals to grow in a collaborative environment, with access to career development and the chance to make a meaningful impact in the cold chain logistics industry.</p>
          </div>
          <div className='career'>
            <h2>Opportunities for Students</h2>
            <p>At CafeCold, we provide students with valuable internships and entry-level positions that offer hands-on experience in cold chain logistics. Join us to develop your skills, gain industry insights, and collaborate with professionals while making a meaningful impact on sustainability and innovation. Explore your potential with CafeCold and kickstart your career!</p>
          </div>
        </div>
        <div id='openRolesContainer' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div className='openRoles'>
            <p>01</p>
            <p>Logistics Coordinator</p>
            <Link to="/openRoles?accordion=0" onClick={handleScrollToTop} className='navlinks'>
              <button>Apply now</button>
            </Link>
          </div>
          <div className='openRoles'>
            <p>02</p>
            <p>Supply Chain Manager</p>
            <Link to="/openRoles?accordion=1" onClick={handleScrollToTop} className='navlinks'>
              <button>Apply now</button>
            </Link>          </div>
          <div className='openRoles'>
            <p>03</p>
            <p>Warehouse Supervisor</p>
            <Link to="/openRoles?accordion=2" onClick={handleScrollToTop} className='navlinks'>
              <button>Apply now</button>
            </Link>          </div>
          <div className='openRoles'>
            <p>04</p>
            <p>Freight Forwarder</p>
            <Link to="/openRoles?accordion=3" onClick={handleScrollToTop} className='navlinks'>
              <button>Apply now</button>
            </Link>          </div>
          <div className='openRoles'>
            <p>05</p>
            <p>Customer Service Expert</p>
            <Link to="/openRoles?accordion=4" onClick={handleScrollToTop} className='navlinks'>
              <button>Apply now</button>
            </Link>          </div>
          <div className='openRoles'>
            <p>06</p>
            <p>Inventory Control Specialist</p>
            <Link to="/openRoles?accordion=5" onClick={handleScrollToTop} className='navlinks'>
              <button>Apply now</button>
            </Link>          
          </div>
        </div>
      </div>

    </div>

      <Footer/>
    </div>
  );
};

export default Career;