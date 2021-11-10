import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import notFound from '../../images/error/error.jpg'
const PageNotFound = () => {
    return (
        <div>
            <img style={{ width: "100%",height:"600px" }} src={notFound} alt="" />
            <Link to="/"><button className="goBack">Go Back</button></Link>
        </div>
    );
};

export default PageNotFound;