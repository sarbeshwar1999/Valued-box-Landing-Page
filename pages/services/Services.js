import React from 'react'
import Card from 'react-bootstrap/Card';

import CardColumns from 'react-bootstrap/CardColumns';

import vectorimage10 from "../../assets/NoPath - Copy (9).svg";
import vectorimage11 from "../../assets/NoPath - Copy (8).svg";
import vectorimage12 from "../../assets/Mask Group 1.svg";
import './Services.css'

const Services = () => {
    return (
        <div className="services-section" >
    
    <div className="firstsrvice-container">
    <div className="service-heading"><h1>Title-1</h1></div>
        <div className="row">

        <div className="col-md-4">
          <img className="firstservice-photo" alt="t1f1"  src={vectorimage10}/>
          <h4 className="service-title">Service Business</h4>
          <div className="service-name">
                 <h4>Clinics</h4>
                 <h4>Laboratories</h4>
                 <h4>Therapists</h4>
                 <h4>Fitness centre</h4>
                 <h4>Legal personel</h4>
                 <h4>Finance people</h4>
                 <h4>Mentors/Advisor</h4>
                 <h4>Logistic Service</h4>
          </div>
        </div>

        <div className="col-md-4">
          <img className="secondservice-photo" alt="t2f2"  src={vectorimage11}/>
          <div className="tool-box">

          <h4 className="service-title">Product Business</h4>
          <div className="service-name">
                  <h4>Small manufacturer</h4>
                 <h4>Homemade product</h4>
                 <h4>NGO's</h4>
                 <h4>Bakery</h4>
                 <h4>Bakery</h4>
                 <h4>Handcraft makers</h4>
                 <h4>Organic farms</h4>
                 <h4>Boutiques</h4>
                 <h4>Restaurants/Cafes</h4>
          </div>

          </div>
         
        </div>

        <div className="col-md-4">
          <img className="lastservice-photo" alt="t3f3"  src={vectorimage12}/>
          <h4 className="service-title">Event Organiser</h4>
          <div className="service-name">
          <h4>Teacher/Educator</h4>
                <h4> Organiser</h4>
                <h4>Seminar</h4>
                <h4>Webinar</h4>
                <h4>Course Seller</h4>
          </div>
        </div>
          

        </div>
      </div>


    


<CardColumns className="secondservice-container">
          <Card>
            
            <Card.Body className="container-box">
              <Card.Title className="box-title">If you are in 
                        Product Business</Card.Title>
                        <hr/>
              <Card.Text>
              <div className="lastcont-element">
              All you need to do is to build or make the product and ship it.<br/>
               Rest everything will be taken care by us.
               So just ship and chill.
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            
            <Card.Body className="container-box">
              <Card.Title className="box-title">If you are a 
                                 Service Provider</Card.Title>
                                 <hr/>
              <Card.Text>
              <div className="lastcont-element">
              All you need to do is create your page and promote it as much as you can.<br/>
                 You can give online consultation and get people to find you who needs you.
                 You can get features like online appointment booking, follow up notification,online lead generation, etc.
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            
            <Card.Body className="container-box">
              <Card.Title className="box-title">If you are an 
                 Event Organiser</Card.Title>
                 <hr/>
              <Card.Text>
              <div className="lastcont-element">
              You can publish your links on our local search engine platform to get more visibility.<br/>
              You will get the whole end to end process like landing on your page to register for the event for the customer.<br/>
              You can organise your online events also on our platform with all supporting features.

                </div>
              </Card.Text>
            </Card.Body>
          </Card>
</CardColumns>






        </div>
    )
}

export default Services;
