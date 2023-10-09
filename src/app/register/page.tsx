import React from "react";
import SwitchAccount from "../components/SwitchAccount";
import AuthButton from "../components/AuthButton";

function Register() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <div className="max-w-sm w-full">
        {/* form */}
        <div className="border py-8 flex flex-col justify-middle items-center gap-5">
          {/* logo */}
          <img src="/img/insta-logo.png" width="200" alt="" />
          <p className="text-center text-gray-500 font-bold">
            Sign up to see photos and videos from your friends.
          </p>

          {/* Auth facebook */}
          <AuthButton text="Log in with Facebook" icon={true} />

          {/* line */}
          <div className=" my-3 bg-zinc-300 relative max-w-xs w-full h-px before:content-['OR'] before:absolute before:-top-3 before:left-1/2 before:transform before:-translate-x-1/2  before:bg-white before:w-10 before:text-center before:text-sm before:font-semibold before:text-gray-500"></div>

          {/* input block */}
          <div className="flex flex-col gap-2 max-w-xs w-full mt-3">
            <input
              className="bg-zinc-50 border rounded-sm px-1.5 py-2 text-xs placeholder:text-gray-500 outline-none focus:border-gray-400"
              type="text"
              placeholder="Mobile number or email address"
            />
            <input
              className="bg-zinc-50 border rounded-sm px-1.5 py-2 text-xs placeholder:text-gray-500 outline-none focus:border-gray-400"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="bg-zinc-50 border rounded-sm px-1.5 py-2 text-xs placeholder:text-gray-500 outline-none focus:border-gray-400"
              type="text"
              placeholder="Username"
            />
            <input
              className="bg-zinc-50 border rounded-sm px-1.5 py-2 text-xs placeholder:text-gray-500 outline-none focus:border-gray-400"
              type="password"
              placeholder="Password"
            />
            <AuthButton text="Sign up" icon={false} />
          </div>
        </div>
        {/* switch auth */}
        <SwitchAccount
          text="Already have an account?"
          link="/login"
          label="Login"
        />
      </div>
    </div>
  );
}

export default Register;
