import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProduct } from '../redux/actions/productActions';
function ProductComponent(props) {
	const dispatch = useDispatch()
	const products = useSelector((state) => state.allProducts.products)
	// const { id, title } = products
	
	const fetchProps = async () => {
		
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err)=>{console.log(err);})
			
		dispatch(setProduct(response.data));
	}
	useEffect(() => {
		fetchProps()
	},[])
console.log(products)
	return (
		<div className='four column wide'>
			<div className='ui link cards'>
				<div className='image'></div>
				<div className='content'>
						<div className='header'>
							
						</div>	
				</div>
			</div>
		</div>
	);
}

export default ProductComponent;