// src/components/ProductDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(parseInt(productId));
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={require(`../assets/${product.image}`).default} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetails;
