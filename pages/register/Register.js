import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './Register.css'



const Register = () => {
    return (
       <div className="register-section">
           <div className="first-part">
               <h1 className="register-line">First 500 customers can get a chance to win
                   a free version of our product for free</h1>
           </div>
           <div className="second-parts">
             <Container>
                    <Row>
                    <Col>
                    <InputGroup size="sm" className="register-button">
    
                    <FormControl
                            placeholder="Enter your email or phone number"
                            aria-label="register-button"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                    </Col>
                    <Col>
                    <Button variant="primary">PRE REGISTER NOW</Button>
                    </Col>
                    
                    </Row>
                   
             </Container>


           </div>
       </div>

    )
}

export default Register;
