import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}



const ProductDetails = () => {
    const [products, setProducts] = useState({});
    const { user } = useAuth();
    const { productsId } = useParams();
    console.log(productsId);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        // data.status = "pending";
        // fetch("http://localhost:5000/addOrders", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((result) => console.log(result));
        console.log(data);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/singleProducts/${productsId}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
    //     <div>
    //     <div className="details-container">
    //       <div className="row container">
    //         <div className="col-md-6">
    //           <img className="w-50" src={products.image} alt="" />
    //           <p>{products?.description}</p>
    //           <h1>{products?.name}</h1>
    //           <h1> {products?.price}</h1>
    //         </div>
    //         <div className="col-md-6">
    //           <form onSubmit={handleSubmit(onSubmit)}>
    //             <input
    //               {...register("name")}
    //               placeholder="Name"
    //               defaultValue={products?.name}
    //               className="p-2 m-2 w-100 input-field"
    //             />
  
    //             <input
    //               {...register("description")}
    //               defaultValue={products?.description}
    //               placeholder="Description"
    //               className="p-2 m-2 w-100 input-field"
    //             />
  
    //             <input
    //               {...register("image", { required: true })}
    //               placeholder="Image Link"
    //               defaultValue={products?.image}
    //               className="p-2 m-2 w-100 input-field"
    //             />
  
    //             <input
    //               {...register("price", { required: true })}
    //               placeholder="Price"
    //               defaultValue={products?.price}
    //               type="number"
    //               className="p-2 m-2 w-100 input-field"
    //             />
  
               
  
    //             {errors.exampleRequired && <span>This field is required</span>}
  
    //             <input
    //               type="submit"
    //               value="Order now"
    //               className="btn btn-info w-50"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>



        <Container className="my-5" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} style={verticalCenter} >

                    <Box>
                        <img style={{ width: '350px' }} src={products.image} alt="" />
                        <Typography variant="h3">
                            {products.name}
                        </Typography>

                    </Box>
                </Grid>

                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                defaultValue={products?.name}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("description")}
                                defaultValue={products?.description}
                                placeholder="Description"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                defaultValue={products?.image}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                defaultValue={products?.price}
                                type="number"
                                className="p-2 m-2 w-100 input-field"
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
