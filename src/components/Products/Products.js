import React from 'react';
import './Products.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id="products">
            <h2 className="my-5 textStyle">PRODUCTS ARE AVAILABLE</h2>
            {products.length === 0 ?
                <Spinner animation="border" variant="dark" />
                :

                <div className="container">
                    {

                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        >

                        </Product>)
                    }
                </div>
            }
        </div>
    );
};

export default Products;