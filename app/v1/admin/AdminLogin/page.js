"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    if (email === "rohit@gmail.com" && password === "12345") {
      router.push("/v1/admin/project");
    } else
      (e) => {
        alert("failed to login");
        console.log(e);
      };
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={submitLoginForm}>Submit</button>
    </div>
  );
};

export default AdminLogin;
