// Home.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>

      <Header/>
       <div>
         <div id='coldMeetsInnovation'>
           <p>Cold Meets</p>
           <p>Innovation</p>
           <div>
             <p>Keeping Innovation Fresh:</p>
             <p>Delivering sustainable freshness, keeping it cool for a better tomorrow, one shipment at a time.</p>
             <Button>Learn More</Button>
             <Button>CONTACT US</Button>
             <p>LOCAL, REGIONAL, AND NATIONWIDE TRANSPORTATION SERVICES</p>
           </div>
         </div>
  
         <div id='ourServicesAndStrategy'>
           <img src='' alt='img'/>
           <p>Our Services and Strategy</p>
           <p>In temperature-controlled transportation, precision is key. Ensuring that materials are kept at the right temperature throughout their journey is critical for maintaining quality and compliance. We specialize in managing these intricate logistics, handling everything.</p>
           <Button>Know More</Button>
         </div>
  
         <div id='committedToResponsibleLogistics'>
           <p>Committed to Responsible Logistics</p>
           <p>We are dedicated to sustainable practices throughout our cold chain logistics. By optimizing energy use, minimizing waste, and employing eco-friendly packaging, we ensure that your temperature-sensitive products are handled with care for both quality and the environment. Together, we can maintain product integrity while protecting our planet. Let’s make a difference!</p>
           <p>Real-Time Information</p>
           <p>Perishables don’t last long. Be it medicines, fruits, vegetables, protein, dairy, or seafood, without the right ambient conditions maintaining freshness or flavor is an impossible feat. Fortunately, cold chain technologies have come a long way and offer far more options than just cold or hot settings. There are state-of-the-art technologies in the market that help monitor conditions inside a container and provide a real-time view of location, temperature, humidity, oxygen, and carbon dioxide levels. That's not all. Should market situations change, shippers can use the available knowledge to redirect cargo to more favorable destinations.</p>
         </div>
  
         <div id='careers'>
           <p>
           Join our dynamic team and be part of a company committed to innovation and excellence in cold chain logistics. We value creativity, collaboration, and a passion for sustainability. Whether you're an experienced professional or just starting your career, we offer opportunities for growth and development in a supportive environment. Explore our current openings and take the next step in your career with us!</p>
           <Button>Work With Us</Button>
           <img src='' alt='imgLadder'/>
         </div>
       </div>
      <Footer/>
    </div>
  );
};

export default Home;