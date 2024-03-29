import React from "react";
import "./MakeAdmin";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    fetch("https://biycle-sales000001.onrender.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1>make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-info mt-3"
          type="submit"
          value="MAKE ADMIN"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
