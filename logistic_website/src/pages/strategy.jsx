// Strategy.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Strategy = () => {
  return (
    <div>
      <Header />
      <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
        <div className='bg2'>

        <div id="strategyMain">
          <h1 id='strategyHeading'>Services and<br />Strategy</h1>
          <div style={{display:"flex"}}>
            <div id='strategy'>
              <p>In temperature-controlled transportation, precision is key. Ensuring that materials are kept at the right temperature throughout their journey is critical for maintaining quality and compliance. We specialize in managing these intricate logistics, handling everything from inventory tracking to regulatory adherence. With our expertise, you can trust that your temperature-sensitive products are in good hands, allowing you to concentrate on your core business while we ensure smooth, reliable transport.</p>
              <p>Tailored Business Solutions in Consulting, Technology, Transportation, Storage and Training</p>
            </div>
            <img src='' alt='vid'/>
          </div>
          
        </div>

        </div>

        <div className='bg3'>

          <div id='servicesContainer'>
            <div className='services'>
              <h2>Express Delivery</h2>
              <p>Experience unmatched speed with our express delivery service! We pride ourselves on providing rapid, reliable, and efficient shipping solutions tailored to meet your urgent needs. We arrive on time, every time. Our streamlined process and technology guarantee swift handling and real-time tracking, so you’re always in the loop. </p>
            </div>

            <div className='services'>
              <h2>Corporate Fuel Credits</h2>
              <p>Our Fuel Advance Program offers quick access to funds for covering fuel expenses, helping you manage costs without disrupting your cash flow. With streamlined applications and fast approvals, you can focus on your operations while we handle the financial details. Keep your business moving smoothly with our flexible solutions!</p>
            </div>

            <div className='services'>
              <h2>Vehicle Management</h2>
              <p>Stay on top of your fleet's needs with our all-in-one vehicle management solution. Effortlessly track and manage essential paperwork, insurance details, and vehicle data with our intuitive system. Monitor vehicle health, including wear and tear, with real-time updates to ensure timely maintenance and avoid costly repairs. </p>
            </div>

            <div className='services'>
              <h2>Cargo Insurance</h2>
              <p>Protect your shipments with our comprehensive cargo insurance, offering competitive rates and tailored policies against loss, damage, and theft. Our quick and hassle-free application process ensures you get the coverage you need without breaking the bank. Contact us today!</p>
            </div>

            <div className='services'>
              <h2>Distress Repair (SOS)</h2>
              <p>Keep your operations running smoothly with our 24/7 roadside assistance. We provide on-site repairs, alternative vehicle arrangements, and loading/unloading support. With over 1,000 experts in our network, you can count on us for quick, reliable help whenever you need it. Stay secure and mobile!</p>
            </div>

            <div className='services'>
              <h2>Strategic Partnerships</h2>
              <p>Maximize your business potential through our strategic partnerships. Collaborating with industry leaders, we offer innovative solutions and valuable expertise to drive growth and improve efficiency. Together, we create lasting value and help you stay ahead in a competitive landscape. Let’s succeed together!</p>
            </div>
          </div>

        </div>


      </div>

      <Footer/>
    </div>
  );
};

export default Strategy;