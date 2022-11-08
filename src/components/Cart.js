import { useEffect, useState } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

import { CartState } from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import "./mystyle.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  const Navigate = useNavigate();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
    <div className="home  ">
    {cart.length>0 ? (<>
    
    
   
      <div className=" mt-2 ">
        <ListGroup >
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id} className="shadow-sm p-1 mb-1 bg-white rounded">
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>

                
              
              

                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Link to="/togo">
          {" "}
          <Button type="button" disabled={cart.length === 0}  onClick={() =>
                      dispatch({
                        type: "EMTY_CART",
                        payload: [],
                      })}>
            Proceed to Checkout
          </Button>{" "}
        </Link>
      </div>
      </>):(Navigate('/home'))}
    </div>
    </>
  );
};

export default Cart;
