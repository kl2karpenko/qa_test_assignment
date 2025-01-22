import React from 'react';

const ItemList = ({ items }) => {
	return (
		<div>
			<h2>Item List</h2>
			{items.length === 0 ? (
				<p>No items added yet.</p>
			) : (
				<ul>
					{items.map((item, index) => (
						<li key={index}>
							{item.title} - ${item.price}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ItemList;
