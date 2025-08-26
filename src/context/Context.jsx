import React, { createContext } from 'react';
import { faker } from '@faker-js/faker';
import { useReducer } from 'react';
import { Reducer } from './Reducer';
import { useContext } from 'react';

const Cart = createContext();
faker.seed(99)

const Context = ({ children }) => {
  // Generate 30 fake products
  const products = Array.from({ length: 30 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlPicsumPhotos(), // random image
    instock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
const[state,dispatch]=useReducer(Reducer,{products:products,cart:[]})
  console.log(products);

  return <Cart.Provider value={{ state,dispatch }}>{children}</Cart.Provider>;
};

export { Context, Cart };
	
export const CartState = () => {
		return useContext(Cart)
}
	
