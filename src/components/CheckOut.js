import React, { useEffect } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigete = useNavigate();
  useEffect(()=>{
    setTimeout(() => {
      navigete('/')
    }, 5000);
  },[navigete])
  return (
    <div>
      {" "}
      <Container>
        <Container className="mt-5 text-center justify-content-lg-center">
          <Row>
            <Col>
              <Card className="shadow-lg p-5">
                <h1>Checkout</h1>
                <p>Thank you ! for your order</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default CheckOut;
