import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { Button } from '@mui/material';

function App() {
  const [items, setItems] = useState([]);
  const [visibleProductsList, setvisibleProductsList] = useState(true);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setvisibleProductsList(!visibleProductsList)}>{!visibleProductsList ? 'Show all products' : 'Add new product'}</Button>
      {visibleProductsList ? (
        <>
          <h1>Product List</h1>
          <ProductList />
        </>
      ) :
        (
          <>
            <h1>Product Management</h1>
            <div>
              <h3>Add new Product</h3>
              <ItemForm addItem={addItem} />
              <ItemList items={items} />
            </div>
          </>
        )}
    </>
  )
}

export default App
