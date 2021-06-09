import React from 'react'


import './Feature.css'

import vectorimage1 from "../../assets/NoPath - Copy (3).svg";
import vectorimage2 from "../../assets/NoPath - Copy (4).svg";
import vectorimage3 from "../../assets/icons8-post-ads-100.svg";
import vectorimage4 from "../../assets/icons8-online-support-100.svg";
import vectorimage5 from "../../assets/NoPath - Copy (5).svg";
import vectorimage6 from "../../assets/NoPath - Copy (5).svg";



const Feature = () => {
    return (
        
 <div className="feature-section">
      <section className="first-section">

        <h1>Hurray!</h1>
        <h3> You're welcome</h3>
        <h3>We have exactly what you need.</h3>
      </section>

  <section className="second-section">
      <div className="container">
         <div className="row">

          <div className="col-md-4">
          <img className="castomized-photo" alt="r1f1"  src={vectorimage1}/>
          <h4 className="castomized-line">E-commerce support</h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r1f1"  src={vectorimage2}/>
          <h4 className="castomized-line">Online consultancy service software</h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r1f1"  src={vectorimage3}/>
          <h4 className="castomized-line">Online event organizing software</h4>
         </div>

    </div>
      </div>

      </section>

     <section className="third-section">

      <div className="">

            <div className="feature-line">
            You will get complete e-commerce support for your product business, where you can sell, promote, and get the payment of your product.
            </div>

            <div className="feature-line">
              
            If you have service agency or a self-employed professional ,you can create, manage and upgrade your whole business online with some essential features like online appointment book , customer support , online consultancy and many more .
              
            </div>

            <div className="feature-line">
              
            If you are an educator or event organizer ,NO NEED TO WORRY about creating a website for operating online and organize your event  ,  course , webinar , live classes . when you can get all in Valued-Box event organization software that will cover the whole things like listing , advertising , registering , managing from start to end.
              
            </div>
            
      </div>
      </section>

      <section className="fourth-section">
            
      <div className="container">
        <div className="row">

          <div className="col-md-4">
          <img className="castomized-photo" alt="r4f4"  src={vectorimage4}/>
          <h4 className="castomized-line">24 X 7 Customer Support for your business </h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r5f5"  src={vectorimage5}/>
          <h4 className="castomized-line">Advance measuring tools and features for a better user experience</h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r6f6"  src={vectorimage6}/>
          <h4 className="castomized-line">Optimised organic market rage .</h4>
         </div>

        </div>
      </div>

         </section>

      

      <section className="fifth-section">

        <div className="">

            <div className="feature-line">
                
            By registering in Valued-Box you will get a quality 24*7 customer support for your customers and for your business also for your hand holding in the field of ease of using technologies , marketing for your product and business advices for going your business effectively.
                
            </div>

            <div className="feature-line">
                
            You will get some advance measuring tools by which you can measure matrix and analyse your business data easily , that which products works well, analytics of your post , optimized your rich and revenue.
                
            </div>

            <div className="feature-line">
                
            By using valued-Box business technologies you will get a instant boost in your sells because our algorithm optimized your local visibility organically , so you have no need to worry aboutpromoting your product and services in your local area .
                
            </div>
            
        </div>

      </section>
        
</div>
        
    )
}

export default Feature;
<div></div>