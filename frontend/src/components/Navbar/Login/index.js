import axios from "axios";
import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = () => {
    axios
      .post("http://localhost:5000/user/login", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          postLogin();
        }}
      >
        login
      </button>
    </div>
  );
};
