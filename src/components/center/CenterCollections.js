import React from 'react';

import platinum from './images3/midtown-grey.svg' ;
import titanium from './images3/nova-light-grey-shaker.svg' ;
import gold from './images3/ice-white-shaker.svg' ;
import silver from './images3/silver-collection001.svg' ;

import './image.css';
import './center.css';
import './middleslide.css';


const CenterCollections= () => {
  return (
    <div>
         
 <div className='row'>
 <div className='separator'>
  <div className='line'></div>
  <h2>OUR COLLECTIONS</h2>
  <div className='line'></div>
  </div>
</div>

<div class="row">
  <div class="column" >
  <a href="#" target="_blank" rel="noreferrer">
    <div className='box'>
    <img className='img' src={platinum} /></div>
   </a>  
    <p className='text-center'><b>Platinum Collection</b></p>
</div>
  <div class="column" >
  <a href="#" target="_blank" rel="noreferrer">
    <div className='box'>
    <img className='img' src={titanium} /></div>
   </a>  
  
   <p className='text-center'><b>Titanium Collection</b></p>
  </div>
  <div class="column" >
  <a href="#" target="_blank" rel="noreferrer">
    <div className='box'>
    <img className='img' src={gold} /></div>
   </a>  
   
   <p className='text-center'><b>Gold Collection</b></p>
  </div>
  <div class="column" >
  <a href="#" target="_blank" rel="noreferrer">
    <div className='box'>
    <img className='img' src={silver} /></div>
   </a>  
   
   <p className='text-center'><b>Silver Collection</b></p>
  </div>
</div>




 </div>
  )
}

export default CenterCollections;
