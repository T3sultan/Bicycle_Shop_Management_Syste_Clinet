import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Reviews.css";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = data => {
    fetch("https://biycle-sales000001.onrender.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => console.log(result));

    console.log(data);
  };
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className=" p-1 w-25 input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className=" p-1 w-25 input-field"
          name="name"
          defaultValue={user?.name}
          type="name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="p-1 w-25 input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="p-1 w-25 input-field"
          name="star"
          placeholder="Star"
          {...register("star", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-info mt-3"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Review;
