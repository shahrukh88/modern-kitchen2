import React from 'react';


import StickyNav from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
import logo1 from './images/logo1.svg' ;
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/mainpage/MainHeader';
import MainHeader2 from './components/mainpage/MainHeader2';
import platinum from './images/midtown-grey.svg' ;
import titanium from './images/nova-light-grey-shaker.svg' ;
import gold from './images/ice-white-shaker.svg' ;
import silver from './images/silver-collection001.svg' ;
import mask1 from './images/Maskgroup1.svg' ;
import mask2 from './images/Maskgroup2.svg' ;
import mask3 from './images/Maskgroup3.svg' ;
import mask4 from './images/Maskgroup4.svg' ;
import Group6 from './images/Group6.svg' ;
import './footer.css';
import './image.css';
import './center.css';
import './middleslide.css';


const App = () => {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
          padding: 1%;
          width: 100%;
          text-align:center;
          height:20%;
          opacity: 0.8;
          background-color:#4e5157;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
        @media(max-width: 400px){
          .nav {
            height:10.0%;
            padding: 1%;
            width: 100%;
                 }
        }
      `}</style>
    )
  }
  return (
    <div>
      {style()}
         
         <div className="container">
           <StickyNav className='topleft'>
           <p className='h1bebas'>High Quality Kitchens</p>
           <div class="vl"></div>
           <div className='h2bebas'>The Modern Kitchen</div>
           <div class="vl"></div>
            <div>
             <MainHeader />
              <main>
              <Route path='/welcome'>
              <Welcome />
              </Route>
              <Route path='/products'>
              <Products />
               </Route>
             </main>
          </div>

          </StickyNav>
  
      <img className='img' src={logo1} />
      <div className='center'>Our Commitment<br/>to Quality</div>
      <div className='center2'>We offer Ready to Assemble (RTA) cabinets that are KCMA certified.<br/> KCMA certified cabinets are recognized in the marketplace as a <br/>quality product able to perform after a rigorous battery to tests<br/> simulating years of household use.</div>
      <div className='center3'>BROWSE OUR CABINES</div>
 </div>

 <div className='row'>
 <div className='separator'>
  <div className='line'></div>
  <h2>OUR COLLECTIONS</h2>
  <div className='line'></div>
  
</div>


 
 
</div>



<div className='row2'>
 
  <div className='column2' >
     <div className='row3'>
       <div className='column3'>
          <a href="#" target="_blank" rel="noreferrer">
            <img className='img12' src={mask1} />
          </a>  
  
          <a href="#" target="_blank" rel="noreferrer">
            <img className='img2' src={mask2} />
          </a>  
  
    </div>
  <div className='column3' >
    <a href="#" target="_blank" rel="noreferrer">
            <img className='img3' src={mask3} />
          </a>  
  
          <a href="#" target="_blank" rel="noreferrer">
            <img className='img13' src={mask4} />
          </a>  
  
  </div>
</div>


    
  </div>
  <div className='column2' >
    <div className='about'><b>About Us</b></div>
    <p className='p2'>Matrix Cabinets, a wholesale distributor of high-quality cabinets, opened its doors in 2007. We have a team that has solidified our position as one of the premier cabinet companies in the southeast. Based in Baxley, Georgia, Matrix Cabinets boasts a 300,000 square feet facility where they keep a constant supply of inventory. Conveniently located near the port of Savannah, Georgia.<br/><br/>

     In addition to supplying beautiful, high-quality cabinets, Matrix Cabinets prides itself on exceptional customer service, with a sales support staff of 50 percent bilingual employees. Over the past ten years, Matrix Cabinets’ attention to craftsmanship, detail, and customer service have made it a preferred choice in the cabinet industry</p>

      <div className='readmore'>
      <a href="#" target="_blank" rel="noreferrer">
      <b>Read More</b>
  
     </a>  
       </div> 
  </div>
</div>

<div className='footer'>
  
<div className='row4'>
  <div className='column4' >
   
           <p className='h12bebas'>High Quality Kitchens</p>
           <div class="vl12"></div>
           <div className='h121bebas'>The Modern Kitchen</div>
           <div class="vl12"></div>
           <p className='copy'>copyright &copy; 2022 The Modern Kitchens.All Right Reserved.</p>


  </div>
      <div className='column4' >
        <div><img className='logo' src={Group6} /></div>
        <div className='conditions'><MainHeader2 /></div>
      </div>
</div>
</div>
    
    </div>
  )
}

export default App
