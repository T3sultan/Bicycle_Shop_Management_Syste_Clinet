import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import './ProductDetails.css'
const ProductDetails = () => {
    const history = useHistory();
    const { productsId } = useParams();
    const [service, setService] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    useEffect(() => {

        fetch(`/products.json/${productsId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, []);
    const handlePlaceOrder = () => {
        history.push('/placeorder')
    }

    return (
        <div>
            <h2 className="orderPlace">Order Place</h2>
            <div className="container4 my-4">

                <div className="details1">

                    <Card className="detailsStyle" style={{ width: '30rem', alignItems: 'center' }}>
                        <Card.Img variant="top" className="w-100" src={service?.image} />
                        <Card.Title>{service?.description}</Card.Title>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("title")}
                                    placeholder="Title"
                                    className="p-2 m-2 w-100"
                                    value={service?.title}

                                />
                                <br />
                                <input
                                    {...register("name")}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100"
                                    value={service?.name}
                                />
                                <br />
                                <input
                                    {...register("email")}
                                    placeholder="Email"
                                    className="p-2 m-2 w-100"
                                    value={service?.email}
                                />
                                <br />
                                <br />
                                <input
                                    {...register("address")}
                                    placeholder="Address"
                                    className="p-2 m-2 w-100"
                                    value={service?.address}
                                />
                                <br />
                                <br />
                                <input
                                    {...register("city")}
                                    placeholder="city"
                                    className="p-2 m-2 w-100"
                                    value={service?.city}
                                />
                                <br />
                                <input
                                    {...register("price")}
                                    placeholder="price"
                                    className="p-2 m-2 w-100"
                                    type="number"
                                    value={service?.price}
                                />
                                <br />
                                <input
                                    {...register("date")}
                                    placeholder="Name"
                                    type="date"
                                    className="p-2 m-2 w-100"
                                    value={service?.date}
                                />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input onClick={handlePlaceOrder} type="submit" value="Place Order" className="btn btn-info w-100 btnStyle1" />
                            </form>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </div>
    );
};

export default ProductDetails;