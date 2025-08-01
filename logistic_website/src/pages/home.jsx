// Home.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
// import { Button } from 'react-bootstrap';
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

        <video autoPlay loop muted playsInline id='bg-vid'>
          <source src='https://video.wixstatic.com/video/c837a6_a80ebb32eff54e3d8588e55383e1ce1e/1080p/mp4/file.mp4' type='video/mp4'/>
        </video>

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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti at debitis molestias tenetur assumenda repellat nobis velit! Architecto enim ut odit numquam consequatur sequi placeat ullam facilis quaerat tempora.</p>
              <Link to="/strategy" onClick={handleScrollToTop} className='navlinks'>
              <button className="button">Know More</button>
              </Link>
           </div>
         </div>
  
         <div id='committedToResponsibleLogistics' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div>
            <h1>Committed to Responsible Logistics</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt rem cupiditate harum culpa vero illo similique nihil sit neque debitis esse odit dicta repudiandae quibusdam, aspernatur ea possimus perferendis at laboriosam fugit, doloremque recusandae. Fugiat quidem ducimus voluptatibus quae qui dolore perferendis corrupti deserunt, ab, repellendus beatae et distinctio. Placeat quisquam blanditiis, omnis molestiae quasi eaque. Assumenda, repellat placeat.</p>
          </div>
          <div>
            <h1>Real-Time Information</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem deserunt, animi recusandae doloribus ipsa illo maiores nemo reprehenderit autem cum earum tempora laboriosam? Ducimus rerum molestias eligendi excepturi, optio dolore, sequi culpa sint deserunt praesentium magni placeat beatae quod dolores amet ea reiciendis iste modi nemo voluptate atque earum, temporibus quidem! Provident dolorem veniam praesentium, qui quasi officiis. Sint modi, aliquam nesciunt praesentium natus quae corporis cupiditate numquam! Exercitationem repudiandae est beatae, laudantium ab saepe pariatur vel incidunt obcaecati.</p>            
          </div>
         </div>
  
         <div id='careers' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
            <div id='sub'>
              <h1>Careers</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi maxime illo ad tempora minima? Similique ratione laborum quis sed id omnis nesciunt inventore eligendi esse ducimus nihil consequatur laudantium aliquid voluptas, itaque deleniti reiciendis adipisci blanditiis eaque deserunt atque optio distinctio porro cumque! Commodi maiores harum veniam unde ipsum repellat nulla ullam, amet ipsam distinctio incidunt sint culpa? Ex itaque quisquam voluptatibus sit magni incidunt dolorem modi earum praesentium.</p>
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