import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/context";

function SingleItem({ value }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <Card key={value.id} className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "15rem", margin: "0.6rem", padding: 0,  }}>
        <Card.Img variant="top"  src={value.image} alt={value.name} style={{ height: 100 }} />
        <Card.Body>
          <Card.Title> {value.name}</Card.Title>
          <Card.Text>
            <span>₹ {value.price}</span>
          </Card.Text>

          {cart.some((p) => p.id === value.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: value,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: value,
                })
              }
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleItem;
