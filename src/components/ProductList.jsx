import React, { useState, useEffect } from 'react';
import {
 Grid2 as Grid, Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
	}),
}));


const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(data => setProducts(data))
			.catch(() => setError('Failed to load products.'));
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<Grid container spacing={2}>
			{products.map(product => (
				<Grid size={12}>
					<Item>
						<Grid container
						      sx={{
							      justifyContent: "center",
							      alignItems: "center",
						      }}>
							<Grid size={4}>
								Title: {product.title}
							</Grid>
							<Grid size={8}>
								<b>Price: ${product.price}</b>
							</Grid>
						</Grid>
					</Item>
				</Grid>
			))}
		</Grid>
	);
};

export default ProductList;
