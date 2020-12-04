import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const UserEdit = (props) => {
  const { id } = useParams();

  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
  });
  const URL = `http://localhost:3003/users/${id}`;

  useEffect(() => {
    const loadUser = async () => {
      const user = await axios.get(URL);
      setFormData(user.data);
    };
    loadUser();
  }, []);

  const FormValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    alert(
      `${formData.name}, ${formData.username}, ${formData.email}, ${formData.website}`
    );

    const datasubmit = async () => {
      const data = await axios.put(URL, formData);
      console.log(data);
      history.push("/");
    };

    datasubmit();
    setFormData("");
  };

  return (
    <>
      <div className="w-50 mt-5 container">
        <form onSubmit={FormSubmit}>
          <div className="form-group">
            <label>Full Name : </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="John Deo"
              onChange={FormValue}
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label>Username </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="johndeo12"
              onChange={FormValue}
              value={formData.username}
            />
          </div>
          <div className="form-group">
            <label>Email </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="johndeo@mail.com"
              onChange={FormValue}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              name="website"
              className="form-control"
              placeholder="www.johndeo.com"
              onChange={FormValue}
              value={formData.website}
            />
          </div>
          <div className="text-center">
            <Link className="btn btn-success mx-2" to="/">
              Cancel
            </Link>
            <button type="submit" className="btn btn-warning">
              Update User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserEdit;
