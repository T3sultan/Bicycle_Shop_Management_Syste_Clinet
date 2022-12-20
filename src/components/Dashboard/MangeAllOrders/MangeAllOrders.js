import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MangeAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();

  // const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");

  // console.log(status);
  useEffect(() => {
    fetch("https://biycle-sales000001.onrender.com/allOrders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  // const status = "apporved";
  const handleOrderId = id => {
    setOrderId(id);
    console.log(id);
  };

  const onSubmit = data => {
    console.log(data, orderId);
    fetch(`https://biycle-sales000001.onrender.com/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };
  const handleDelete = id => {
    //const url = ;
    fetch(`https://biycle-sales000001.onrender.com/myOrder/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("successfully deleted");
          const remaining = orders.filter(service => service._id !== id);
          setOrders(remaining);
        }
      });
  };

  return (
    <div>
      <h1>Manage All Orders {orders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.title}</td>
              <td>{pd.description.slice(0, 100)}</td>
              <td>
                <img
                  style={{ width: "150px", borderRadius: "5px" }}
                  src={pd.image}
                  alt=""
                />
              </td>
              <td>{pd.price} TK</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form>
              </td>
              <button
                onClick={() => handleDelete(pd._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
              {/* <button className="btn bg-info p-2">Update</button> */}
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MangeAllOrders;
