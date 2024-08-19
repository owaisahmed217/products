import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, removeProduct, updateProduct } from './redux/actions';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => ({
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error
  }));
  const [newProduct, setNewProduct] = useState({ name: '', price: '', imgSrc: '' });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    if (newProduct.name.trim() === '' || isNaN(parseFloat(newProduct.price))) {
      alert('Please enter valid product name and price.');
      return;
    }
    dispatch(addProduct(newProduct));
    setNewProduct({ name: '', price: '', imgSrc: '' });
  };

  return (
    <div className="App">
      <header>
        <h1>Product List</h1>
      </header>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <ProductForm newProduct={newProduct} setNewProduct={setNewProduct} handleAddProduct={handleAddProduct} />
        <ProductList
          products={products}
          removeProduct={(id) => dispatch(removeProduct(id))}
          updateProduct={(product) => dispatch(updateProduct(product))}
        />
      </main>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
