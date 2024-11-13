// About.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header />
      <div id='aboutUsMain'>
            <h1 id='aboutUsHeading'>About Us</h1>
        <div id='aboutUs' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div>
            <p>At the heart of our cold chain logistics is cutting-edge temperature control technology that not only ensures optimal conditions for your products but also provides real-time monitoring and data analytics. Unlike our competitors, we utilize advanced IoT sensors and AI-driven insights to track and manage temperature fluctuations proactively.</p>
            <ol>
              <li>Real-Time Monitoring: Clients can access live updates on their shipments, allowing for swift action if conditions deviate from the ideal range. This transparency builds trust and reduces anxiety about product integrity.</li>
              <li>Data-Driven Decisions: Our analytics platform provides valuable insights into shipping performance, enabling clients to optimize their supply chain and minimize waste.</li>
              <li>Sustainability Focus: By enhancing efficiency and reducing spoilage, our technology supports sustainable practices, aligning with the growing demand for eco-friendly logistics.</li>
              <li>Proactive Risk Management: With predictive alerts, we can mitigate risks before they escalate, ensuring that your products arrive in perfect condition every time.</li>
            </ol>
            <p>By serving a diverse range of industries, we position ourselves as a one-stop solution for all cold chain needs, ensuring that clients can rely on us for excellence, no matter the product.</p>
          </div>

          <div>
            <h3>Industry Focus</h3>
            <p>Comprehensive Cold Chain Solutions for Diverse Sectors <br /> We specialize in providing cold chain logistics tailored to a wide array of industries, including pharmaceuticals, biotech, perishable food products, fruits, vegetables, meat, seafood, and beverages. Our expertise ensures that every product, no matter how sensitive, is handled with the utmost care and precision.</p>
            <ol>
              <li>Versatile Expertise: Our team possesses deep knowledge across multiple sectors, enabling us to meet the unique challenges of each industry while adhering to specific regulations and quality standards.</li>
              <li>End-to-End Solutions: From temperature-controlled storage to transportation, we offer a complete cold chain service that ensures product integrity from origin to destination.</li>
              <li>Tailored Approaches: We customize our logistics strategies to suit the specific needs of each product type, whether it’s maintaining strict temperature ranges for pharmaceuticals or ensuring freshness for perishable foods.</li>
              <li>Robust Quality Control: Our rigorous quality assurance processes, including real-time monitoring and reporting, guarantee that all products are delivered in optimal condition.</li>
              <li>Sustainability Commitment: We prioritize eco-friendly practices across all sectors, reducing waste and energy consumption while ensuring safe and reliable delivery.</li>
            </ol>
          </div>

        </div>

        <div id='leaderShip' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div id='leaderShipHeader' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <h2>Our <br /> Leadership Team</h2>
            <Link to='/openRoles' onClick={handleScrollToTop} className='navlinks'>
            <button>Join our team</button>
            </Link>
          </div>
          <div id='profiles'>
            <div className='individual'>
              <p className='name'>Niranjan M</p>
              <img src='https://static.wixstatic.com/media/96f32a_7ebd7ae87b42483aaa20c29825d9facb~mv2.jpeg/v1/crop/x_44,y_20,w_171,h_220/fill/w_239,h_274,fp_0.50_0.50,lg_1,q_80,enc_auto/92b60e21-7de6-487c-b915-1643b4e83175.jpeg' alt='img1' width={200}/>
              <p className='position'>Co-Founder</p>
              <p className='email'>niranjan.maharana@shipswift.in</p>
            </div>
            <div className='individual'>
              <p className='name'>Robin R</p>
              <img src='https://static.wixstatic.com/media/96f32a_5449c2261ac74a70862d16a6b49ecc95~mv2.jpg/v1/crop/x_47,y_8,w_130,h_149/fill/w_182,h_208,fp_0.50_0.50,lg_1,q_80,enc_auto/Robin%20Rajan%20Photo.jpg' alt='img2' width={200}/>
              <p className='position'>Co-Founder</p>
              <p className='email'>robin.rajan@shipswift.in</p>
            </div>
            <div className='individual'>
              <p className='name'>Pranav G</p>
              <img src='https://static.wixstatic.com/media/96f32a_3ef39a2f380640b3803cfbf1ddb5e74f~mv2.jpeg/v1/crop/x_183,y_198,w_572,h_738/fill/w_334,h_382,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/575631a6-96ff-4ef6-8f94-584622166260.jpeg' alt='img3' width={200}/>
              <p className='position'>Sales & Supply Head</p>
              <p className='email'>pranav.gite@shipswift.in</p>
            </div>
            <div className='individual'>
              <p className='name'>Manjunath V</p>
              <img src='https://static.wixstatic.com/media/96f32a_67645094e760499c923bdccc82fd6360~mv2.jpg/v1/fill/w_334,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91cf8d02-c60a-43cc-a790-11c3bed4a4ab_edited.jpg' alt='img4' width={200}/>
              <p className='position'>Operation Head</p>
              <p className='email'>manjunath.v@shipswift.in</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;