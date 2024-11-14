// Home.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>

      <Header/>
      <div className='bg2'>

       <div id='home'>
         <div id='coldMeetsInnovation'>
           <p id='h1a'>Cold Meets</p>
           <p id='h1b'>Innovation</p>
           <div id='coldMeetsInnovationContainer'>
             <h2>Keeping Innovation Fresh:</h2>
             <p id="sub">Delivering sustainable freshness, keeping it cool for a better tomorrow, one shipment at a time.</p>
             <div className='button-container'>
              <Link to="/about" onClick={handleScrollToTop} className='navlinks'>
                <button className="button" id='button1'>Learn More</button>
              </Link>
             </div>
             <div className='button-container'>
              <Link to="/contact" onClick={handleScrollToTop} className='navlinks'>
                <button className="button" id='button2'>CONTACT US</button>
              </Link>
             </div>
             <p id='servicesSupply'>LOCAL, REGIONAL, AND NATIONWIDE TRANSPORTATION SERVICES</p>
           </div>
         </div>
  
         <div id='ourServicesAndStrategy' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
           <img src=' https://static.wixstatic.com/media/11062b_8ce3b16ee2c2452a83dc9793a0e80056~mv2.jpg/v1/fill/w_1140,h_1140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Warehouse%20Shelves%20from%20Above.jpg' alt='img'/>
           <div id='sub'>
              <h1>Our Services and Strategy</h1>
              <p>In temperature-controlled transportation, precision is key. Ensuring that materials are kept at the right temperature throughout their journey is critical for maintaining quality and compliance. We specialize in managing these intricate logistics, handling everything.</p>
              <Link to="/strategy" onClick={handleScrollToTop} className='navlinks'>
              <button className="button">Know More</button>
              </Link>
           </div>
         </div>
  
         <div id='committedToResponsibleLogistics' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div>
            <h1>Committed to Responsible Logistics</h1>
            <p>We are dedicated to sustainable practices throughout our cold chain logistics. By optimizing energy use, minimizing waste, and employing eco-friendly packaging, we ensure that your temperature-sensitive products are handled with care for both quality and the environment. Together, we can maintain product integrity while protecting our planet. Let’s make a difference!</p>
          </div>
          <div>
            <h1>Real-Time Information</h1>
            <p>Perishables don’t last long. Be it medicines, fruits, vegetables, protein, dairy, or seafood, without the right ambient conditions maintaining freshness or flavor is an impossible feat. Fortunately, cold chain technologies have come a long way and offer far more options than just cold or hot settings. There are state-of-the-art technologies in the market that help monitor conditions inside a container and provide a real-time view of location, temperature, humidity, oxygen, and carbon dioxide levels. That's not all. Should market situations change, shippers can use the available knowledge to redirect cargo to more favorable destinations.</p>            
          </div>
         </div>
  
         <div id='careers' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
            <div id='sub'>
              <h1>Careers</h1>
              <p>Join our dynamic team and be part of a company committed to innovation and excellence in cold chain logistics. We value creativity, collaboration, and a passion for sustainability. Whether you're an experienced professional or just starting your career, we offer opportunities for growth and development in a supportive environment. Explore our current openings and take the next step in your career with us!</p>
              <Link to="/career" onClick={handleScrollToTop} className='navlinks'>
              <button className="button">Work With Us</button>
              </Link>
            </div>
           <img src='https://static.wixstatic.com/media/84770f_a37f07130daf43ee9876e1ca2575342f~mv2.webp/v1/fill/w_768,h_806,al_c,q_85,enc_auto/0b340f_8c1b85ad307a4ac98f252224bdb3c9b4~mv2.webp' alt='imgLadder'/>
         </div>
       </div>

      </div>

      <Footer/>
    </div>
  );
};

export default Home;