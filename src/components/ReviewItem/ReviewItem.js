import { Grid } from '@mui/material';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ review }) => {
    const { email, comments, name } = review;

    return (
        <div className="service1 pb-3">

            <h2 className="title3 mt-2">{email}</h2>
            <h2 className="title3 mt-2">{name}</h2>
            <p className="p-1 des1">{comments.slice(0, 100)}</p>

        </div>
    );
};

export default ReviewItem;