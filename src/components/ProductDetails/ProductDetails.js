import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Grid from '@mui/material/Grid';
import { Typography, Button, Container, Alert } from '@mui/material';
import Box from '@mui/material/Box';
import './ProductDetails.css'
import Swal from "sweetalert2";

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}




const ProductDetails = () => {


    const [products, setProducts] = useState({});
    const { user } = useAuth();
    const { productsId } = useParams();
    // console.log(productsId);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        // data.status = "pending";
        fetch("http://localhost:5000/placeOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire({
                   
                    icon: 'success',
                    title: 'Successfully has been Order',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        console.log(data);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/singleProducts/${productsId}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <Container className="my-5 styleContainer" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter} >

                    <Box>
                        <img style={{ width: '300px', borderRadius: '10px' }} src={products.image} alt="" />
                        <Typography variant="h6">
                            {products.name}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            {products.description}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {products.price} TK
                        </Typography>

                    </Box>
                </Grid>

                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name",{ required: true })}
                                placeholder="Name"
                                defaultValue={products?.name}
                                className="p-1 m-1 w-100 input-field"
                            />
                            <input
                                {...register("title",{ required: true })}
                                placeholder="Title"
                                defaultValue={products?.title}
                                className="p-1 m-1 w-100 input-field"
                            />
                            <input
                                {...register("description",{ required: true })}
                                defaultValue={products?.description}
                                placeholder="Description"
                                className="p-1 m-1 w-100 input-field"
                            />
                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                defaultValue={products?.image}
                                className="p-1 m-1 w-100 input-field"
                            />
                            <input
                                {...register("phone", { required: true })}
                                placeholder="Phone Number"
                                defaultValue={products?.phone}
                                className="p-1 m-1 w-100 input-field"
                            />
                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                defaultValue={products?.price}
                                type="number"
                                className="p-1 m-1 w-100 input-field"
                            />
                            <input
                                {...register("email", { required: true })}
                                placeholder="Email"
                                defaultValue={products?.email}
                                className="p-1 m-1 w-100 input-field"
                            />
                            <input
                                {...register("address", { required: true })}
                                placeholder="Address"
                                defaultValue={products?.address}
                                className="p-1 m-1 w-100 input-field"
                            />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input

                                type="submit"
                                value="Order now"
                                className="btn btn-info w-50"
                            />



                        </form>
                    </Box>

                </Grid>


            </Grid>
        </Container>
    );
};

export default ProductDetails;
