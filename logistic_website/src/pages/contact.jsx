// Contact.js
import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };

  // Newsletter
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setSubscribe(e.target.checked);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Email:', email);
    console.log('Subscribe to newsletter:', subscribe);
  };

  return (
    <div id='formMain'>
        <Header />
      <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
        <h1>Contact</h1>
        <div className='formContainer'>
          <div className='section1'>
            <p>We’d love to hear from you! For inquiries, support, or to learn more about our services, reach out to us:</p>
            <p>sales@cafecold.com<br />enquiries@cafecold.com</p>
          </div>

          <div className='section2'>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  First Name
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                  />
                </label>
              </div>
              <div>
                <label>
                  Last Name<br />
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                  />
                </label>
              </div>
              <div>
                <label>
                  Email<br />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </label>
              </div>
              <div>
                <label>
                  Message<br />
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <hr />

        <div className='formContainer'>
          <div className='section1'>
            <h2>Stay Informed</h2>
            <p className='section1'>Subscribe to our weekly newsletter.</p>
          </div>
          <div className='section2'>
            <form onSubmit={handleSubscribe}>
              <div>
                <label>
                  Email<br />
                  <input 
                    type="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    required 
                  />
                </label>
              </div>
              <div>
                <label>
                  <input 
                    id='checkbox'
                    type="checkbox" 
                    checked={subscribe} 
                    onChange={handleCheckboxChange} 
                  />
                  I want to subscribe to the newsletter
                </label>
              </div>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
  
      </div>
        <Footer/>
    </div>
  );
};

export default Contact;