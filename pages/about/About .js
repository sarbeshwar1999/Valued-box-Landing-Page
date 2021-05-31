import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
import Button from 'react-bootstrap/Button'



const About  = () => {
    return (
        <Carousel className="slide-bar">
            <Carousel.Item>
                <div className="">
               <h1 className="first-line">Gift your busness a online busness today</h1>
               <h3 className="second-line">And guess what!</h3>
                <p>You don't even need awebsite.</p>
                </div>
                <Button variant="primary">Start Registration Process now</Button>{' '}
                
            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <h1 className="first-line">You can market your product and service easily everywhere </h1>
                    <h3 className="second-line">And sell those in a broader market</h3>
                </div>
                <Button variant="primary">Start Registration Process now</Button>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div>
                <h1 className="first-line">Imagine a situation where you can operate your business </h1>
                <h3 className="second-line">From your phone or computer in your home</h3>
                </div>
                <Button variant="primary">Start Registration Process now</Button>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        
    )
}

export default About ;
