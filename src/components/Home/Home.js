import React from 'react';
import Banner from '../Banner/Banner';
import ExclusiveFeatures from '../ExclusiveFeatures/ExclusiveFeatures';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <ExclusiveFeatures></ExclusiveFeatures>
            <Footer></Footer>


        </div>
    );
};

export default Home;