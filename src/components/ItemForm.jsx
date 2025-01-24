import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ItemForm = ({ addItem }) => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validation
		if (!title || !price) {
			setError('Both fields are required.');
			return;
		}
		if (isNaN(price) || Number(price) <= 0) {
			setError('Price must be a positive number.');
			return;
		}

		// Add item and reset form
		addItem({ title, price: parseFloat(price).toFixed(2) });
		setTitle('');
		setPrice('');
		setError('');
	};

	return (
		<form data-testid={'someel'} onSubmit={handleSubmit}>
			<h2>Create New Product</h2>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<div>
				<TextField
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
					label="Title:"
				/>
			</div>
			<div>
				<TextField
					type="text"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					required
					label="Price:"
				/>
			</div>
			<Button type="submit">Add Item</Button>
		</form>
	);
};

export default ItemForm;
