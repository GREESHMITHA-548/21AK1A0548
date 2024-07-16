// src/pages/AllProductsPage.js

import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getAllProducts } from '../services/productService';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;
