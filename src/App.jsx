import { useState } from 'react'
import Mainbanner from './Mainbanner'
import imagen1 from './assets/checked.png'
import imagen2 from './assets/truck.png'
import imagen3 from './assets/heart.png'
import imagen4 from './assets/refund.png'
import brnd1 from './assets/brand1.png'
import brnd2 from './assets/brand2.png'
import steps from './assets/steps.png'
import three from './assets/three.png'
import four from './assets/number4.png'
import line from './assets/line.png'
import padlockwh from './assets/padlockwhite.png'
import './index.css'

function App() {


  return (
    <>
      <div className='layout'>
        <div className='layout-2'>
          <img className='imgs' src={imagen1} alt='img'/>
          <p className='title-header'>30-Day Satisfaction Guarantee</p>
        </div> 
        <div className='layout-2'>
          <img className='imgs' src={imagen2} alt='img2'/>
          <p className='title-header'>Free Delivery On Orders Over $40.00</p>
        </div> 
        <div className='layout-2'>
        <img className='imgs' src={imagen3} alt='img3'/>
          <p className='title-header'>50.000+ Happy Customers</p>
        </div> 
        <div className='layout-2'>
        <img className='imgs' src={imagen4} alt='img4'/>
          <p className='title-header'>100% Money Back Guarantee</p>
        </div> 
      </div>
      <div className='brands'>
          <img className='brandingph' src={brnd1} alt='img3' />
          <img className='brandingph2' src={brnd2} alt='img4' />
      </div>
      <div className='main-title'>
        <h1 className='title-com1'>Wait ! your order in progress.</h1>
        <p className='subtitle1'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div className='head-layout'>
        <div className='layout-3'>
          <img className='bannimg' src={steps} alt='num1' />
          <p className='subletter'>Step 1 : Cart Review</p>
        </div>
        <div className='layout-3'>
          <img className='bannimg' src={steps} alt='num2' />
          <p className='subletter'>Step 2 : Checkout</p>
        </div>
        <div className='layout-3'>
          <img className='bannimg' src={three} alt='num3' />
          <p className='subletter'>Step 3 : Special Offer</p>
        </div>
        <div className='layout-3'>
          <img className='bannimg' src={four} alt='num4' />
          <p className='subletter'>Step 4 : Confirmation</p>
        </div>
      </div>
            <div className='newsection'>
              <Mainbanner />
            </div>
          <div className='footerbox'>
            <div className='ftrone'>
              <p className='footerone'>Copyright (©) 2023</p>
                <img className='linelayout' src={line} alt='copyright' />
              <p className='footerone'>clarifionsupport@clarifion.com</p>
            </div>
            <div className='ftrtwo'>
              <img className='iconew' src={padlockwh} alt='padlock' />
              <p className='footerone'>Secure 256-bit SSL encryption.</p>
            </div>
          </div>
      </>
  )
}

export default App
