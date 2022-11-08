import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Signup = () => {

  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');
  const [state, setState] = useState([]);
  
const navigate =    useNavigate();



 let exixtUser = state.filter((elem) =>  email === elem.email ? true : false
);
 
  let register = (e) => {
    e.preventDefault();

    if(exixtUser.length >0){
      alert("USER ALREDY EXIXT");
      navigate('/login');
    }    else if(email && password){

      const userData = {
        id: new Date().getTime() % (3600 * 1000 * 24).toString(),
        email : email,
        password : password
    }
   
      setState([...state, userData])
   setEmail('');
   setPassword("");
    }
    else{
      alert("enter the email and password");
}
     
      
  };

  return (
    <>
      <Container className="mt-3 text-center ">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header className="p-3  text-light bg-primary">
                <h4>SignUp- Page</h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
                <Form onSubmit={register}>
                 
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      value = {email}
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="password"
                      onChange={(e)=>setPassword(e.target.value)}
                      value = {password}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    
                      {" "}
                      <Button variant="primary" type="submit">
                        Signup{" "}
                      </Button>
                   
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
