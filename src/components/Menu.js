import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SingleItem from "./SingleItem";

import { CartState } from "../context/context";

const Menu = () => {
  const {
    state: { myData },
  } = CartState();

  return (
    <>
      <Container className="mt-2 d-flex justify-content-center " >
        <Row>
         
           
              {myData.map((value) => {
                return <SingleItem value={value} key={value.id} />;
              })}
            
          
        </Row>
      </Container>
    </>
  );
};

export default Menu;
