// Career.js
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Career = () => {

  return (
    <div>
      <Header />

    <div className='bg2'>

      <div>
        <div id='careerContainer' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div className='career'>
            <h2>Working at Frosty Freight</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem mollitia, nemo accusantium vitae soluta, esse harum cupiditate debitis alias aliquid a unde incidunt inventore voluptas, dolorem iure. Beatae error exercitationem tenetur debitis cum nihil libero, cupiditate placeat neque quaerat dolor accusamus esse. Mollitia itaque sit optio quidem, sapiente vero! Deleniti minima, dolor corporis corrupti sapiente eaque repellat, quia, consectetur incidunt reprehenderit qui deserunt aliquid quam unde? Exercitationem natus in facere.</p>
          </div>
          <div className='career'>
            <h2>Company Culture</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, perferendis? Consequuntur, dolor vitae. Commodi quibusdam quis minima vel temporibus. Reprehenderit ad pariatur voluptatum minima ducimus quas. Reprehenderit, cupiditate. Praesentium nesciunt, distinctio velit dolorem, suscipit soluta placeat delectus harum, dolores blanditiis sapiente fuga. Quae, quo officiis adipisci eos consequuntur nihil. Ut ratione dolorem esse ipsam, corporis id voluptas, voluptatibus cumque delectus illum expedita impedit corrupti mollitia animi blanditiis? Voluptate, minus vitae.</p>
          </div>
          <div className='career'>
            <h2>Opportunities for Professionals</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis atque eveniet explicabo rem provident veritatis rerum, at quas neque beatae similique? Temporibus quis in praesentium velit fugit odit eum sint adipisci, pariatur, obcaecati neque ex officia? Quas esse, exercitationem optio officia sint adipisci quia accusantium alias quasi error recusandae asperiores.</p>
          </div>
          <div className='career'>
            <h2>Opportunities for Students</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at iusto fugit veritatis tempore. Rem nesciunt impedit voluptatibus debitis numquam pariatur porro aliquid assumenda hic, quae odit, saepe dicta. Consequatur cumque perferendis sequi quia neque harum commodi corporis in id! Nesciunt, dicta, laudantium reprehenderit quas consequatur omnis voluptatem totam eius nostrum aperiam deleniti provident sint debitis aliquam possimus veniam blanditiis magni dolores dolorum odit. Odit omnis blanditiis adipisci veniam neque.</p>
          </div>
        </div>
        <div id='openRolesContainer' data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <div className='openRoles'>
            <p>01</p>
            <p>Logistics Coordinator</p>
              <button>Apply now</button>
          </div>
          <div className='openRoles'>
            <p>02</p>
            <p>Supply Chain Manager</p>
              <button>Apply now</button>
          </div>
          <div className='openRoles'>
            <p>03</p>
            <p>Warehouse Supervisor</p>
              <button>Apply now</button>
          </div>
          <div className='openRoles'>
            <p>04</p>
            <p>Freight Forwarder</p>
              <button>Apply now</button>
            </div>
          <div className='openRoles'>
            <p>05</p>
            <p>Customer Service Expert</p>
              <button>Apply now</button>
            </div>
          <div className='openRoles'>
            <p>06</p>
            <p>Inventory Control Specialist</p>
              <button>Apply now</button>
          </div>
        </div>
      </div>

    </div>

      <Footer/>
    </div>
  );
};

export default Career;