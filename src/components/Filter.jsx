import React, { useState } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import Rating from './Rating';
import { useCart } from '../context/useCart';

const Filter = () => {
  const {
    productState: { sort, byStock, byFastDelivery, byRating },
    productDispatch,
  } = useCart();

  const [rate, setRate] = useState(byRating || 0);

  return (
    <div className="filters">
      <span className="title">Product Filter</span>

      {/* Sort by Ascending */}
      <span>
        <FormCheck
          name="group1"
          label="Ascending"
          type="radio"
          inline
          id="inline-1"
          checked={sort === 'lowToHigh'}
          onChange={() =>
            productDispatch({ type: 'SORT_BY_FILTER', payload: 'lowToHigh' })
          }
        />
      </span>

      {/* Sort by Descending */}
      <span>
        <FormCheck
          name="group1"
          label="Descending"
          type="radio"
          inline
          id="inline-2"
          checked={sort === 'highToLow'}
          onChange={() =>
            productDispatch({ type: 'SORT_BY_FILTER', payload: 'highToLow' })
          }
        />
      </span>

      {/* Fast Delivery */}
      <span>
        <FormCheck
          label="Fast Delivery"
          type="checkbox"
          inline
          id="inline-3"
          checked={byFastDelivery}
          onChange={() =>
            productDispatch({
              type: 'FILTER_BY_DELIVERY',
              payload: !byFastDelivery,
            })
          }
        />
      </span>

      {/* Out of Stock */}
      <span>
        <FormCheck
          label="Include Out of Stock"
          type="checkbox"
          inline
          id="inline-4"
          checked={byStock}
          onChange={() => productDispatch({ type: 'FILTER_BY_STOCK' })}
        />
      </span>

      {/* Rating */}
      <span>
        <label style={{ paddingRight: 20 }}>Rating:</label>
        <Rating
          rating={rate}
          onClick={(i) => {
            setRate(i + 1);
            productDispatch({
              type: 'FILTER_BY_RATING',
              payload: i + 1,
            });
          }}
        />
      </span>

      {/* Clear Filters */}
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTER',
          })
        }
      >
        Clear Filter
      </Button>
    </div>
  );
};

export default Filter;
