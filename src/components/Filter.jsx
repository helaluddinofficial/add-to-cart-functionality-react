import React from 'react'
import { Button, FormCheck } from 'react-bootstrap'
import Rating from './Rating';
import { useState } from 'react';

const Filter = () => {
	const [rate, setRate] = useState(2)
	console.log(setRate)
	return (
    <div className="filters">
      <span className="title"> Product Filter</span>
      <span>
        <FormCheck
          name="group1"
          label="assending"
          type="radio"
          inline
          id={`inline-1`}
        />
      </span>
      <span>
        <FormCheck
          name="group1"
          label="desending"
          type="radio"
          inline
          id={`inline-2`}
        />
      </span>{' '}
      <span>
        <FormCheck
          name="group1"
          label="fast Delivery"
          type="checkbox"
          inline
          id={`inline-3`}
        />
      </span>
      <span>
        <FormCheck
          name="group1"
          label="Out of Stock"
          type="checkbox"
          inline
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 20 }}>Rating:</label>
        <Rating rating={rate} onClick={(i)=>setRate(i+1)} />
      </span>
      <Button variant="light">Clear Filter</Button>
    </div>
  );
}

export default Filter
