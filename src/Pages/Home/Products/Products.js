import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'

const Products = () => {
    const [products, setProducts]=useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data));
    },[])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>Product</p>
                <h2 className='text-5xl font-semibold '>
                    Our product Area
                </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                    }
              </div>  
            <div className='text-center mt-20 mb-20'>
            <button className="btn btn-outline btn-warning">appointment</button>
            </div>

        </div>
    );
    }
export default Products;