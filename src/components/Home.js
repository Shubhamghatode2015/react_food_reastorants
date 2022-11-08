import { Card, Col,Row, Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import React from 'react';

const Home = () => {
  return (
    <div>
        
        <Container className="mt-5 text-center justify-content-lg-center">
    <Row>
        <Col >
            <Card className="shadow-lg p-5">
      <h1>Welcome To Food's </h1>
      <h1><strong>Kitchen</strong> </h1>
      
      <Link to="/menu" ><Button className="mt-4 " variant="outline-info" >Go to Menu </Button></Link>
      </Card>
      </Col>
      </Row>
      </Container>
       
    </div>
  )
}

export default Home;
