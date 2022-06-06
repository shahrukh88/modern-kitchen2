import React from 'react';


import StickyNav from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

import { Route } from 'react-router-dom';

import mask1 from './images3/Maskgroup1.svg' ;
import mask2 from './images3/Maskgroup2.svg' ;
import mask3 from './images3/Maskgroup3.svg' ;
import mask4 from './images3/Maskgroup4.svg' ;


import './image.css';
import './Center2.css';
import './middleslide.css';


const App = () => {
  return (
    <div>
         

 


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


    </div>
  )
}

export default App
