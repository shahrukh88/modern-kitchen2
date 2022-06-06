import { Link } from "react-router-dom"; 
import React from 'react';

import logo1 from './images/logo1.svg' ;
import { Route } from 'react-router-dom';
import platinum from './images/midtown-grey.svg' ;
import titanium from './images/nova-light-grey-shaker.svg' ;
import gold from './images/ice-white-shaker.svg' ;
import silver from './images/silver-collection001.svg' ;
import mask1 from './images/Maskgroup1.svg' ;
import mask2 from './images/Maskgroup2.svg' ;
import mask3 from './images/Maskgroup3.svg' ;
import mask4 from './images/Maskgroup4.svg' ;
import Group6 from './images/Group6.svg' ;

import './Main.css';
import './footer.css';

import './center.css';



const MainPage = () => {
  return (
    <div>
        <div className="container">      
         <div className="nav">
           
           <p className='h1bebas'>High Quality Kitchens</p>
           <div class="vl"></div>
  
           <div className='h2bebas'>
           <Link to="/">The Modern Kitchen  </Link> </div>
           <div class="vl"></div>
            <div className='link'>
          
            <a className='link' href="#cabinets">CABINETS</a>
           
            <a className='link' href="#contact">RESOURCES</a>
            <a className='link' href="#about">ABOUT</a>
            <a className='link' href="#contact">CONTACT</a>
 
          </div>
          </div>
     

  
  <img className='img' src={logo1} />
        <div className='center21'>Our Commitment<br/>to Quality</div>
        <div className='center22'>We offer Ready to Assemble (RTA) cabinets that are KCMA certified.<br/> KCMA certified cabinets are recognized in the marketplace as a <br/>quality product able to perform after a rigorous battery to tests<br/> simulating years of household use.</div>
        <div className='center3'>BROWSE OUR CABINES</div>
   
          </div>


<div>
         
 <div className='row' id="cabinets">
 <div className='separator'>
  <div className='line'></div>
  <h2>OUR COLLECTIONS</h2>
  <div className='line'></div>
  </div>
</div>


<div class="row">
  <div class="column" >
  <Link to="/platinum"> <img className='img' src={platinum} /> </Link> 
     <p className='text-center'><b>Platinum Collection</b></p>
</div>
  <div class="column" >
  <Link to="/"> <img className='img' src={titanium} /> </Link> 
   <p className='text-center'><b>Titanium Collection</b></p>
  </div>
  <div class="column" >
  <Link to="/about"> <img className='img' src={gold} /> </Link> 
   
   <p className='text-center'><b>Gold Collection</b></p>
  </div>
  <div class="column" >
  <Link to="/"> <img className='img' src={silver} /> </Link> 
 
   
   <p className='text-center'><b>Silver Collection</b></p>
  </div>
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
  <div className='column2' id="about">
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

<div className='footer' id="contact">
  
   
           <p className='h12bebas'>High Quality Kitchens</p>
           <div class="vl12"></div>
           <div className='h121bebas'>The Modern Kitchen</div>
           <div class="vl12"></div>
           <p className='copy'>copyright &copy; 2022 The Modern Kitchens.All Right Reserved.</p>


  </div>

    
    </div>
  )
}

export default MainPage;
