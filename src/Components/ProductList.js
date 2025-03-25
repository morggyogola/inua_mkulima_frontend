import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/products/all');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.productName} - ${product.productPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;