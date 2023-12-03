import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    loaddata();
  }, []);
  const loaddata = async () => {
    const result = await axios.get("http://localhost:8000/getuser");
    console.log(result);
    setUsers(result.data.data);
  };

  const searchHandel = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8000/getsearch/${key}`);
      result = await result.json();
      if (result) {
        setUsers(result.data);
      }
    }else {
      loaddata();
    }
  };

  return (
    <>
      <div className="content">
        <section className="content  h-100">
          <div className="container-fluid  h-100">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-secondary">
                  <div className="card-header">
                    <h3 className="card-title">View All User DATA</h3>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="card-header">
                        <div className="card-tools">
                          <div
                            className="input-group input-group"
                            style={{ width: 250 }}
                          >
                            <input
                              type="text"
                              name="table_search"
                              className="form-control float-right"
                              placeholder="Search"
                              onChange={searchHandel}
                            />
                            <div className="input-group-append">
                              <button type="submit" className="btn btn-default">
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap table-striped">
                          <thead>
                            <tr>
                              <th scope="col">SL.NO</th>
                              <th scope="col">Id</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">PhoneNO</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.length > 0 ? (
                              users.map((data, index) => (
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>{data._id}</td>
                                  <td>{data.name}</td>
                                  <td>{data.email}</td>
                                  <td>{data.phoneNO}</td>
                                </tr>
                              ))
                            ) : (
                              <h4> No Result Found</h4>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default User;
