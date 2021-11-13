import React, { useState, useEffect } from 'react';
import './ManageProducts'
import { Table } from 'react-bootstrap';
import Swal from "sweetalert2";

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-peak-90698.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDelete = id => {
        //const url = ;
        fetch(`https://immense-peak-90698.herokuapp.com/manageProducts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    // alert('successfully deleted')
                    Swal.fire({

                        icon: 'success',
                        title: 'Successfully Deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                   
                    const remaining = products.filter(service => service._id !== id)
                    setProducts(remaining);
                }
            })
    }


    return (
        <div>
            <h2>Manage Products:{products.length}</h2>

            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Description</th>

                            <th>Price</th>
                            <th>Action</th>




                        </tr>
                    </thead>
                    {products?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd?.name}</td>
                                <td>{pd?.title}</td>
                                <td>{pd?.email}</td>
                                <td>{pd?.description.slice(0, 20)}</td>
                                <td>{pd?.price}TK</td>



                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-1"
                                >
                                    Remove
                                </button>
                                {/* <Link to={`/services/update/${pd._id}`}> <button className="btn bg-warning">update</button> </Link> */}
                            </tr>
                        </tbody>
                    ))}
                </Table>

            </div>
        </div>
    );
};

export default ManageProducts;