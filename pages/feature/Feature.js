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
          <h4 className="castomized-line">Customized Busness Page</h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r1f1"  src={vectorimage2}/>
          <h4 className="castomized-line">Online Payment Gateway</h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r1f1"  src={vectorimage3}/>
          <h4 className="castomized-line">Personalised Ads</h4>
         </div>

    </div>
      </div>

      </section>

     <section className="third-section">

      <div className="">

            <div className="feature-line">
              
              You can get your customised business page where you can create your own virtual store or office through which you can run your business or office completely online just like a website.
              On that page you can also get the analytics of your page and products by which you can track your business with supporting data.
              
            </div>

            <div className="feature-line">
              
              You will get an online payment gateway to receive your payments.
              
            </div>

            <div className="feature-line">
              
              You can also run your personalised ads on anywhere to promote your business because your page will be an individual address on web and if you want you can promote your products and business on our platform also to get more visibility.
              
            </div>
            
      </div>
      </section>

      <section className="fourth-section">
            
      <div className="container">
        <div className="row">

          <div className="col-md-4">
          <img className="castomized-photo" alt="r4f4"  src={vectorimage4}/>
          <h4 className="castomized-line">24 X 7 Customer Support</h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r5f5"  src={vectorimage5}/>
          <h4 className="castomized-line">Advance measuring tools and features for a better user experience</h4>
          </div>
          <div className="col-md-4">
          <img className="castomized-photo" alt="r6f6"  src={vectorimage6}/>
          <h4 className="castomized-line">Logistics and distribution support</h4>
         </div>

        </div>
      </div>

         </section>

      

      <section className="fifth-section">

        <div className="">

            <div className="feature-line">
                
            By registering your business  on our platform you can get a quality customer support system for your business just by spending a minimal cost.
                
            </div>

            <div className="feature-line">
                
            You can get some advance features like employee management system, invoicing tools, notification feature, inventory management tools for your business by which you can operate your whole business under a roof.
                
            </div>

            <div className="feature-line">
                
            You can get the logistic support also for your product business no matter if you are a local business or a national business.
                
            </div>
            
        </div>

      </section>
        
</div>
        
    )
}

export default Feature;
<div></div>