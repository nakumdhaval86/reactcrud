import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    setUsers(res.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    $(".modal .close").click();
    loadUsers();
  };

  return (
    <>
      <div className="container">
        <div className="py-5">
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{users.name}</td>
                    <td>{users.username}</td>
                    <td>{users.email}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info mx-2"
                        data-toggle="modal"
                        data-target={"#a" + index}
                      >
                        <i className="fa fa-eye"></i>
                      </button>
                      <div
                        className="modal fade"
                        id={"a" + index}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                {users.name}
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              Name : {users.name} <br /> <hr />
                              Username : {users.username} <br /> <hr />
                              Email : {users.email} <br /> <hr />
                              Website : {users.website} <br /> <hr />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/user/edit/${users.id}`}
                      >
                        <i className="fa fa-pencil"></i>
                      </Link>

                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        data-toggle="modal"
                        data-target={"#d" + users.id}
                      >
                        <i className="fa fa-trash mr"></i>
                      </button>
                      <div
                        className="modal fade"
                        id={"d" + users.id}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Are you sure want to delete {users.name} ?
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body text-center">
                              <button
                                className="btn btn-danger mx-2"
                                onClick={(e) => deleteUser(users.id)}
                              >
                                Yes
                              </button>
                              <button
                                className="btn btn-success mx-2"
                                data-dismiss="modal"
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
