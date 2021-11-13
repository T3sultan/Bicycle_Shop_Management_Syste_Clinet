import React from 'react';
import './Explore.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Explores from './Explores/Explores';

const Explore = () => {
    const [explores, setExplores] = useState([]);
    useEffect(() => {
        fetch('https://immense-peak-90698.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setExplores(data.slice(6,20)))
    }, [])

    return (
        <div id="products">
            <h2 className="my-5 textStyle">All PRODUCTS</h2>
            {explores.length === 0 ?
                <Spinner animation="border" variant="dark" />
                :

                <div className="container">
                    {

                        explores.map(explore => <Explores
                            key={explore.name}
                            explore={explore}
                        >

                        </Explores>)
                    }
                </div>
            }
        </div>
    );
};

export default Explore;