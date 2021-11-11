import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'


const Product = ({ product }) => {
    const {name, description, image, price, title,_id } = product;

    return (
        <div className="service pb-3">
            <img className="imageUrl"  src={image} alt="" />
            <h2 className="title2 mt-2">{name}</h2>
            <p className="p-1 des">{description.slice(0, 100)}</p>
            <p><small className="price">{price}</small></p>
            <Link to={`/productDetails/${_id}`}>
            <button style={{ fontSize: "13px" }} className="btn btn-info">Purchase</button>

            </Link>
        </div>
    );
};

export default Product;