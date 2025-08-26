import React from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context'

const SingleProduct = ({ prod }) => {
	const {state:{cart},dispatch}= CartState()
	return (
    <div className="products">
      <Card>
        <CardImg
          variant="top"
          height={200}
          width={200}
          alt={prod.name}
          src={prod.image}
        />
        <CardBody>
          <CardTitle>{prod.name}</CardTitle>
          <CardSubtitle>
            <span> ৳: {prod.price.split('.')[0]}</span>

            {prod.fastDelivery ? (
              <div> Fast Deliver</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={prod.rating} />
          </CardSubtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button variant="danger">Remove from Cart</Button>
          ) : (
            <Button onClick={()=>{dispatch({type:"ADD_TO_CART",payload:prod})}} disabled={!prod.instock}>
              {!prod.instock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default SingleProduct
