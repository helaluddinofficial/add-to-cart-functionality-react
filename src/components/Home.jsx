import React from 'react';
import { useCart } from '../context/useCart';
import SingleProduct from './SingleProduct';
import Filter from './Filter';

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = useCart();

  const transformProduct = () => {
    let sortedProduct = [...products]; // copy to avoid mutating original

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProduct = sortedProduct.filter((prod) => prod.instock);
    }

    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProduct = sortedProduct.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProduct;
  };

  return (
    <div className="home">
      {/* Filter sidebar */}
      <Filter />

      <div className="productContainer">
        {transformProduct().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
