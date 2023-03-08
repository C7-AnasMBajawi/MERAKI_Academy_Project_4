import axios from "axios";
import React, { useState } from "react";

export const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = () => {
    axios
      .post("", { email, password })
      .then(() => {})
      .catch(() => {});
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
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          postLogin;
        }}
      >
        login
      </button>
    </div>
  );
};
