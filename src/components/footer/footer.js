import React from 'react';


import StickyNav from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
import MainHeader2 from '../mainpage/MainHeader2';


import './footer.css';


const footer = () => {
  return (
    <div>
         
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
          <div className='conditions'><MainHeader2 /></div>
        </div>
  </div>
  </div>
  
 </div>
  )
}

export default footer;
