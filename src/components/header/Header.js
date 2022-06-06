import React from 'react';


import StickyNav from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
import logo1 from './imagesheader/logo1.svg' ;
import { Route } from 'react-router-dom';
import MainHeader from '../mainpage/MainHeader';
import Center2 from '../center/Center2';
import './Header.css';


const Header = () => {
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
              <Route path='./center2'>
              <Center2 />
              </Route>
              <Route path='/footer'>
              <Center2 />
               </Route>
             </main>
          </div>

          </StickyNav>
  
      <img className='img' src={logo1} />
      <div className='center'>Our Commitment<br/>to Quality</div>
      <div className='center2'>We offer Ready to Assemble (RTA) cabinets that are KCMA certified.<br/> KCMA certified cabinets are recognized in the marketplace as a <br/>quality product able to perform after a rigorous battery to tests<br/> simulating years of household use.</div>
      <div className='center3'>BROWSE OUR CABINES</div>
 </div>

  </div>
  )
}

export default Header;
