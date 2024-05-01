import React from 'react'
import Navbar from './(components)/navbar/navbar'
import Button from './(components)/button/button'
import Textcard from './(components)/TextCard/textcard'
import Image2Card from './(components)/Image2Card/Image2Card'
import ImageCard from './(components)/ImageCard/ImageCard'
import Sutdent from './(components)/Sutdent/Sutdent'

function Home() {   
  return (
   <>
    <section className="header">
<Navbar/>
    <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <Button title="Visit Us To Know More"/>
          
          </div>
    </section>
    <section className="course">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Textcard title = "Undergraduate Programs"/>
          <Textcard title = "Graduate Programs"/>
          <Textcard title = "Adult Learning & Degree Completion"/>
        
        </div>

       

    </section>

    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <Image2Card src="/Campus1.png" title="DELHI"/>
            <Image2Card src="/Campus2.png" title="HYDERABAD"/>
            <Image2Card src="/Campus3.png" title="MUMBAI"/>
            
            </div>
           
            
    </section>
    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
           <Sutdent/>
           <Sutdent/>
           
        </div>
    </section>
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button title="CONTACT US"/>
       
    </section>
    <section className="facilities">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImageCard source="/libary.png" title="facilities-col"/>
          <ImageCard source="/playground.png" title="facilities-col"/>
          <ImageCard source="/food.png" title="facilities-col"/>
        </div>
    </section>
    
   </>
  )
}

export default Home