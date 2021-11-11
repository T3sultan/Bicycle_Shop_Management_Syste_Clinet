import React from "react";
import './AddProducts.css';
import { useForm } from "react-hook-form";
// import useFirebase from "../../Hook/useFirebase";

const AddProducts = () => {
    // const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-dark">Please Add A Products</h1>
                <div className=" w-25 m-auto mt-5">
                    <div className=" ">
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name")}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <input
                                    {...register("title")}
                                    placeholder="Title"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <input
                                    {...register("phone", { required: true })}
                                    placeholder="Phone Number"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                 <input
                                    {...register("address", { required: true })}
                                    placeholder="Address"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                 <input
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                



                              

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add"
                                    className="btn btn-info w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
