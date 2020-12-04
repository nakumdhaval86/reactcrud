import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const FormValue = (e) => {
    const fName = e.target.name;
    const val = e.target.value;
    setFormData((preVal) => {
      return {
        ...preVal,
        [fName]: val,
      };
    });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    alert(
      ` Thank you 😊 \n Name is : ${formData.name},\n email is : ${formData.email},\n phone is : ${formData.phone}`
    );
  };

  return (
    <>
      <div className="container mt-5" style={{ width: "50%" }}>
        <form onSubmit={FormSubmit}>
          <div className="form-group">
            <label>Full Name : </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={FormValue}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={FormValue}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="number"
              min="0"
              name="phone"
              className="form-control"
              placeholder="Enter your mobile number"
              onChange={FormValue}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary text-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
