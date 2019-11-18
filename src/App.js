import React, { useState } from "react";
import Success from "./success";
import Failure from "./failure";
import Image from "./logo.png";

const App = () => {
  const [user, setUser] = useState({});

  const [allUsers] = useState([
    {
      id: "1",
      userName: "GUL",
      password: "JAN"
    },
    {
      id: "2",
      userName: "SANAM",
      password: "JAN"
    },
    {
      id: "3",
      userName: "ALAM",
      password: "JAN"
    },
    {
      id: "4",
      userName: "AWAL",
      password: "JAN"
    }
  ]);

  const [loginf, setLoginf] = useState("");
  const [logins, setLogins] = useState("");

  const changeHandler = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    allUsers.map(u => {
      if (u.userName === user.userName && u.password === user.password) {
        setLogins("true");
        return null;
      }
      setLoginf("false");
      return null;
    });
  };

  return (
    <div className="container col-3 center border mt-5   bg-secondary text-warning">
      <img src={Image} className="ml-3" alt="" />

      <h1 className="ml-4">LOG IN</h1>

      <div className="container m-3 p-3 col-11">
        <form onSubmit={submitForm}>
          Username{" "}
          <input
            type="text"
            name="userName"
            onChange={changeHandler}
            className="form-control mb-4"
          />
          Password{" "}
          <input
            type="text"
            name="password"
            onChange={changeHandler}
            className="form-control"
          />
          <input
            type="submit"
            className="btn btn-warning form-control mt-4"
            value="Login"
          />
        </form>
        <div>
          {logins === "true" ? (
            <Success />
          ) : loginf === "false" ? (
            <Failure />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
