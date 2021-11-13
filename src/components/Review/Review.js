import React, { useEffect, useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Spinner } from 'react-bootstrap';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviewItem')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div id="reviews">
            <h2 className="my-5 textStyle">All Customer Reviews</h2>
            {reviews.length === 0 ?
                <Spinner animation="border" variant="dark" />
                :

                <div className="container">
                    {

                        reviews.map(review => <ReviewItem
                            key={review._id}
                            review={review}
                        >

                        </ReviewItem>)
                    }
                </div>
            }
        </div>
    );
};

export default Review;