import React from 'react';
import './ReviewItem.css'
import Icon from '@mui/material/Icon';


const ReviewItem = ({ review }) => {
    const { email, comments, name,star } = review;

    return (
        <div className="service1 pb-3">

            <h2 className="title3 mt-2">{email}</h2>
            <h2 className="title3 mt-2">{name}</h2>
            <p className="p-1 des1">{comments.slice(0, 100)}</p>
            <Icon>{star}</Icon>

        </div>
    );
};

export default ReviewItem;