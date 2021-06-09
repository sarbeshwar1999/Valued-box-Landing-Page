import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Register.css'



const Register = () => {
    


      return(

       <div className="register-section">
           <div className="first-part">
               <h1 className="register-line">First 500 customers can get a chance to win
                   a free version of our product for free</h1>
           </div>
           <div className="second-parts">
             <Container>
             <Form>
                    <Row>
                    <Col>
                   
                    <InputGroup className="mb-3">
    
                    <FormControl
                            placeholder="Enter your e-mail "
                            type="text"
                           autoComplete="off"
                           name="email"
                          
                            />
                            </InputGroup>
                    
                    </Col>
                    <Col>
                    <Button type="submit" variant="primary">PRE REGISTER NOW</Button>
                    </Col>
                    
                    </Row>
                    </Form>
             </Container>


           </div>
       </div>

    )
}

export default Register;
