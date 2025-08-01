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
          <div style={{display:"flex", flexWrap:"wrap"}}>
            <div id='strategy'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste praesentium ex accusamus tenetur, quaerat unde id eum et inventore distinctio dignissimos quasi sequi tempore nihil aperiam, fuga quam nam. Praesentium labore veniam unde et exercitationem cum, adipisci odit saepe sed optio distinctio eaque voluptatum sit voluptas animi beatae repellendus tempora expedita dicta. Voluptate iste officia quae, commodi autem incidunt</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi laudantium consectetur</p>
            </div>
            
            <video autoPlay muted loop playsInline id="strategyVideo">
              <source src="https://video.wixstatic.com/video/11062b_5352e4de459c4210a4f817af57e21508/720p/mp4/file.mp4" type='video/mp4'/>
            </video>
          </div>
          
        </div>

        </div>

        <div className='bg3'>

          <div id='servicesContainer'>
            <div className='services'>
              <h2>Express Delivery</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, sequi! Provident ab, qui repudiandae minus, perferendis odit labore quis enim quos natus nobis soluta laudantium rem quae totam. Consectetur voluptatibus corporis eligendi delectus quasi sint quia mollitia magni molestiae? Consectetur, delectus! Officia ipsa ipsum laudantium ad qui repellendus aperiam nulla.</p>
            </div>

            <div className='services'>
              <h2>Corporate Fuel Credits</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quam repellat dolorem iste officia quae accusantium eos amet commodi accusamus nesciunt voluptatem, hic magnam reiciendis dolorum eaque at sequi itaque alias ut deleniti quaerat voluptatibus? Sunt, natus, inventore quidem maxime dignissimos quia accusantium deleniti, magnam et consequuntur doloribus temporibus esse.</p>
            </div>

            <div className='services'>
              <h2>Vehicle Management</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus animi rem? Sapiente animi impedit accusamus consequatur. Praesentium esse minus unde voluptatem optio necessitatibus autem. Voluptate suscipit voluptatibus quasi repellat nostrum eaque beatae quae tenetur eos odit ipsa sint, officia corporis fugit aut ipsam consectetur inventore, dolorem autem velit tempore. </p>
            </div>

            <div className='services'>
              <h2>Cargo Insurance</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe dolorum illo eum quod, vel itaque deleniti dicta, inventore dignissimos quam facilis ipsa eos tempore voluptatum assumenda, nemo officiis? Eos provident, numquam ea nam id eaque possimus repellat sit aliquid ut ex nesciunt dolorum modi quo amet consectetur ipsum harum.</p>
            </div>

            <div className='services'>
              <h2>Distress Repair (SOS)</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur. Voluptas illo porro repudiandae tenetur et! Exercitationem quam, ipsum voluptas hic unde totam laborum, eum perferendis perspiciatis culpa id aliquid quo laudantium accusantium tempore illo alias aliquam. Itaque, accusantium quos! Voluptatum inventore exercitationem iste quia atque eaque magni nisi nam.</p>
            </div>

            <div className='services'>
              <h2>Strategic Partnerships</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate necessitatibus, at vel non nihil quae fugiat tenetur saepe soluta expedita consectetur omnis enim temporibus inventore reiciendis. Adipisci itaque reprehenderit a tenetur expedita facilis nemo? Aliquam maiores odio consectetur modi sit veniam quia itaque quam enim. Facilis commodi doloribus quo et.</p>
            </div>
          </div>

        </div>


      </div>

      <Footer/>
    </div>
  );
};

export default Strategy;