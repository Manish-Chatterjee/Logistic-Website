import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const PrivacyPolicy = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div>
        <Header/>
        <div className='bg1'>

        <div id='privacyPolicyMain'>
            <div>
                <h1 id='privacyPolicyHeading'>Privacy Policy</h1>
                <div id='privacyPolicy' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
                    <div>
                        <h3>A legal disclaimer</h3>
                        <p>The information provided by Chilled and Frozen Express Logistics is for general informational purposes only. While we strive to ensure the accuracy of the content, we make no guarantees regarding its completeness or reliability. Any reliance you place on such information is strictly at your own risk. Chilled and Frozen Express Logistics shall not be liable for any losses or damages arising from the use of this information. Always consult with a qualified professional for specific advice tailored to your situation.</p>
                    </div>
                    <div>
                        <h3>Privacy Policy - the basics</h3>
                            <p>Effective Date: 23 September, 2024</p>
                            
                            <ol>
                                <li>Introduction
                                    <ul>
                                    <li>Chilled and Frozen Express Logistics cares about your privacy. This policy explains how we collect and use your information.</li>
                                    </ul>
                                </li>
                                
                                <li>Information We Collect
                                <ul>
                                    <li>Personal Information: Your name, contact details, and payment info.</li>
                                    <li>Usage Data: Information about how you use our services.</li>
                                </ul>
                                </li>
                                
                                <li>How We Use Your Information
                                <ul>
                                    <li>Provide our services.</li>
                                    <li>Communicate with you about your shipments.</li>
                                    <li>Improve our services.</li>
                                </ul>
                                </li>
                                
                                <li>Sharing Your Information
                                <ul>
                                    <li>Service providers who help us run our business.</li>
                                    <li>Authorities if required by law.</li>
                                </ul>
                                </li>
                                
                                <li>Security
                                    <ul>
                                        <li>We take steps to protect your personal information from unauthorized access.</li>
                                    </ul>
                                </li>
                                
                                <li>Your Rights
                                <ul>
                                    <li>Access, correct, or delete your personal information.</li>
                                    <li>Opt-out of marketing messages.</li>
                                </ul>
                                </li>
                                
                                <li>Changes to This Policy
                                    <ul>
                                        <li>We may update this policy and will let you know by posting the changes on our website.</li>
                                    </ul>
                                </li>
                                
                                <li>Contact Us
                                <p>If you have questions, please email us at <a href="mailto:enquiries@shipswift.in" style={{color:"#f8f8f4"}}>enquiries@shipswift.in</a> and <a href="mailto:enquiries@cafecold.com" style={{color:"#f8f8f4"}}>enquiries@cafecold.com</a>.</p>
                                </li>
                            </ol>
                    </div>
                </div>
            </div>
        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy