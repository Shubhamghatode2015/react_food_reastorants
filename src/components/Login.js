import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
const Login = () => {
  
  const  [email, setEmail] = useState('');
  const  [password, setPasword] = useState('');
const [state, setState] = useState((localStorage.getItem("user", JSON.parse.stete)));
 
console.log(state);


  let handelSubmit = (e) => {
    e.preventDefault();
   
  }
  return (
    <>
      <Container className="mt-3 text-center">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header className="p-3  text-light bg-primary">
                <h4>Login-Page</h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
                <Form onSubmit={handelSubmit}>
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
                      onChange={(e)=>setPasword(e.target.value)}
                      value = {password}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Link to="/home">
                      {" "}
                      <Button
                        variant="primary"
                        type="submit"
                       
                      >
                        Login{" "}
                      </Button>
                    </Link>
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

export default Login;
