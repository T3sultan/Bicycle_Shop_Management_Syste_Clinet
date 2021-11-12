import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Button from '@mui/material/Button';



import banner1 from '../../images/banner/back1.jpg';
import banner2 from '../../images/banner/back7.jpg';
import banner3 from '../../images/banner/back2.jpg';
import banner4 from '../../images/banner/back4.jpg';
import banner5 from '../../images/banner/back5.jpg';
import banner6 from '../../images/banner/back6.jpg';
import { NavLink } from 'react-router-dom';




const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageBanner"
                        src={banner1}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3 className="first">EXPLORE THE THIS BRAND</h3>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                            <Button variant="contained">EXPLORE PRODUCTS</Button>
                        </NavLink>


                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageBanner"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>EXPLORE THE THIS BRAND</h3>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                            <Button variant="contained">EXPLORE PRODUCTS</Button>
                        </NavLink>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageBanner"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>EXPLORE THE THIS BRAND</h3>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                            <Button variant="contained">EXPLORE PRODUCTS</Button>
                        </NavLink>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageBanner"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>EXPLORE THE THIS BRAND</h3>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                            <Button variant="contained">EXPLORE PRODUCTS</Button>
                        </NavLink>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageBanner"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>EXPLORE THE THIS BRAND</h3>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                            <Button variant="contained">EXPLORE PRODUCTS</Button>
                        </NavLink>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imageBanner"
                        src={banner6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>EXPLORE THE THIS BRAND</h3>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                            <Button variant="contained">EXPLORE PRODUCTS</Button>
                        </NavLink>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    );
};

export default Banner;