import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormControl, ListGroup, Row } from 'react-bootstrap';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="CartMain">
      <div className="CartDiv1">
        {cart.length !== 0 ? (
          <ListGroup>
            {cart.map((prod) => (
              <Row className="CartDiv-1" key={prod.id}>
                <Col md={2}>{prod.name}</Col>
                <Col md={2}>Price: ${prod.price}</Col>
                <Col md={2}>
                  <img
                    className="CardDiv1-img"
                    src={prod.image}
                    alt={prod.name}
                  />
                </Col>
                <Col md={2}>
                  <FormControl
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: 'CHANGE_CART_QTY',
                        payload: { id: prod.id, qty: Number(e.target.value) },
                      })
                    }
                  >
                    {[...Array(prod.instock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </FormControl>
                </Col>
                <Col md={2}>
                  <AiFillDelete
                    className="cartDelete"
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: prod,
                      })
                    }
                  />
                </Col>
              </Row>
            ))}
          </ListGroup>
        ) : (
          <Card className="empty-div">
            <span className='emptyText'> Your Cart is Empty </span>
            <span className="cartBacktoHome">
              <Link to="/">
                <Button className=""> Back to Home</Button>{' '}
              </Link>
            </span>{' '}
          </Card>
        )}
      </div>

      <div className="CartDiv2">
        <span className="totalItems">Subtotal ({cart.length}) items</span>
        <span className="totalPrice">Total Price: ${total.toFixed(2)}</span>
        <Button className="checkoutbtn">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
