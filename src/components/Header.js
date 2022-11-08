import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { IoRestaurantSharp } from "react-icons/io5";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./mystyle.css";
import { Link } from "react-router-dom";
import { CartState } from "../context/context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar bg="primary" variant="dark" style={{ height: 50 }}>
      <Container>
        <Link to="/menu" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            Food-Restaurant <IoRestaurantSharp className="md-2" />
          </Navbar.Brand>
        </Link>

        <Nav>
          <Dropdown>
            <Dropdown.Toggle >
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 10}}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}

                  <Link to="/cart">
                    {" "}
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      {" "}
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
