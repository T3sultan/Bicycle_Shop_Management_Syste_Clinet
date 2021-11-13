import React from 'react';
import { Link } from 'react-router-dom';
import './Explores.css'

const Explores = ({ explore }) => {
    const { description, image, price, title, _id } = explore;

    return (
        <div className="service11 pb-3">
            <img className="imageUrl22" src={image} alt="" />
            <h2 className="title22 mt-2">{title}</h2>

            <p className="p-1 des22">{description.slice(0, 100)}</p>
            <p><small className="price1">{price} TK</small></p>
            <Link to={`/productDetails/${_id}`}>
                <button style={{ fontSize: "13px" }} className="btn btn-dark">Purchase</button>

            </Link>
        </div>
    );
};

export default Explores;