import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex flex-col gap -24 items-center max-w-80 md:max-w-96">
      <h1>Authentication</h1>
      <Login />
      <Link href="/register">
        <button className=" border border-[#9747ff] p-2 w-full">
          Register 
        </button>
      </Link>
    </div>
  );
};

export default Auth;
