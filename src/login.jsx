import React, { useState } from "react";
import Success from "./components/success";
import Failur from "./components/failur";

const App = () => {
  const [user, setUser] = useState({});

  const [allUsers] = useState([
    {
      id: "1",
      userName: "fahim",
      password: "ahmadi"
    },
    {
      id: "2",
      userName: "hamid",
      password: "nikoo"
    },
    {
      id: "3",
      userName: "nidal",
      password: "alshahaf"
    },
    {
      id: "4",
      userName: "saood",
      password: "Akhtar"
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
    <div className="container col-3 center border mt-5 rounded">
      <div className="container m-3 p-3 col-11">
        <form onSubmit={submitForm}>
          UserName:{" "}
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
            className="btn btn-success form-control mt-4"
            value="Login"
          />
        </form>
        <div>
          {logins === "true" ? (
            <Success />
          ) : loginf === "false" ? (
            <Failur />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
