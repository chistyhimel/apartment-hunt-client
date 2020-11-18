import React from 'react';
import { useForm } from "react-hook-form";
const RequestBookingForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                name="name"
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}{" "}
              <br />
              <input
                className="form-control"
                type="tel"
                placeholder="Phone No."
                name="phone"
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}{" "}
              <br />
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}{" "}
              <br />
              <textarea
                class="form-control"
                placeholder="Massage"
                name="massage"
                rows="6"
              ></textarea>{" "}
              <br />
              <button type="submit" className="btn btn-colour-1 form-control">
                Request Booking
              </button>
            </form>
    );
};

export default RequestBookingForm;