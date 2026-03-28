import React, { use } from 'react';
import Product from './Product';

const Products = ({ productPromise }) => {
    const products = use(productPromise);
    console.log(products);
    return (
      <div>
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-5xl font-bold">Choose Your AI Model</h1>
          <p className="text-gray-500">
            One subscription gives you access to all frontier AI models
          </p>
        </div>
        <div className='max-w-7xl mx-auto grid sm:grid-cols-3 gap-10 mb-10'>
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;