import React from 'react';
import './Product.css'


const Product = ({ product }) => {
    const {name, description, imgUrl, price, title } = product;

    return (
        <div className="service pb-3">
            <img src={imgUrl} alt="" />
            <h2 className="title2">{name}</h2>
            <p className="p-1">{description.slice(0, 100)}</p>
            <p><small className="price">{price} TK</small></p>
            {/* <Link to={`/serviceDetails/${_id}`}> */}
            <button style={{ fontSize: "13px" }} className="btn btn-info">Purchase</button>

            {/* </Link> */}
        </div>
    );
};

export default Product;