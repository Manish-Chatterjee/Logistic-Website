// About.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div>
      <Header />

      <div className='bg1'>

        <div id='aboutUsMain' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
            <h1 id='aboutUsHeading'>About Us</h1>
        <div id='aboutUs'>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nam minima alias repudiandae ullam autem, sint nobis quidem architecto sit magnam totam voluptates rerum quos deserunt quas voluptas odit facilis similique. Perspiciatis laboriosam nostrum vel quae architecto tenetur nulla cumque, fugit eius nemo doloribus id molestias. Accusamus quam incidunt eligendi.</p>
            <ol>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
            </ol>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque aspernatur expedita cupiditate? Veniam aspernatur assumenda porro ullam laudantium non. Modi nulla provident quos architecto cumque enim explicabo aliquam est ab? Ducimus, veniam quo vel inventore laboriosam voluptate possimus reiciendis.</p>
          </div>

          <div>
            <h3>Industry Focus</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, perferendis, hic, veniam magni accusantium dolores harum iure nisi culpa nesciunt eum! Suscipit, hic molestias debitis commodi dolore fugit sunt soluta voluptatibus incidunt rem aliquid, ea beatae quos necessitatibus! Amet vel laudantium odio, quidem non id.</p>
            <ol>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda,    ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
              <li>Lorem Ipsum: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat voluptatum veritatis aut alias assumenda, ullam maiores accusantium incidunt aspernatur voluptates nisi quia earum, quas saepe porro iste beatae a.</li>
            </ol>
          </div>

        </div>

      
      </div>

      <div className='bg3'>

        <div id='leaderShip' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div id='leaderShipHeader' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <h2>Our <br /> Leadership Team</h2>
            <Link to='#' className='navlinks'>
            <button>Join our team</button>
            </Link>
          </div>
          <div id='profiles'>
            <div className='individual'>
              <p className='name'>Julie</p>
              <img src='https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png' alt='img1' width={200}/>
              <p className='position'>Co-Founder</p>
              <p className='email'>julie@frostyNetwork</p>
            </div>
            <div className='individual'>
              <p className='name'>Sheerin</p>
              <img src='https://cdn-icons-png.freepik.com/256/7341/7341458.png' alt='img2' width={200}/>
              <p className='position'>Co-Founder</p>
              <p className='email'>shireen@frostyNetwork</p>
            </div>
            <div className='individual'>
              <p className='name'>Ashley</p>
              <img src='https://images.icon-icons.com/3150/PNG/512/user_profile_female_icon_192701.png' alt='img3' width={200}/>
              <p className='position'>Sales & Supply Head</p>
              <p className='email'>ashley@frostyNetwork</p>
            </div>
            <div className='individual'>
              <p className='name'>Jenifer</p>
              <img src='https://cdn-icons-png.freepik.com/256/3135/3135823.png' alt='img4' width={200}/>
              <p className='position'>Operation Head</p>
              <p className='email'>jenifer@frostyNetwork</p>
            </div>
          </div>
        </div>
      </div>

      </div>

      <Footer/>
    </div>
  );
};

export default About;