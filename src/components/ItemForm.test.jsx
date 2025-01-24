import React from 'react';

import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import ItemForm from './ItemForm.jsx';

test('ItemForm tests', () => {

	render(<ItemForm />);
	expect(screen.getByTestId('someel')).toBeInTheDocument()
});