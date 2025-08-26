import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct'
import Filter from './Filter'

const Home = () => {
	const { state: {products} } = CartState()
	console.log(products)
	return (
		<div className='home'>
			{/* filter */}
			<Filter/>
			<div className='productContainer'>
				{products.map((prod) => {
					return (
						<SingleProduct prod={prod} key={prod} />
					)
				})}
			</div>
		</div>
	)
}

export default Home
