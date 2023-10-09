import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import SwitchAccount from "../components/SwitchAccount";
import AuthButton from "../components/AuthButton";

function Login() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <div className="max-w-sm w-full">
        {/* form */}
        <div className="border py-8 flex flex-col justify-middle items-center gap-5">
          {/* logo */}
          <img src="/img/insta-logo.png" width="200" alt="" />

          {/* input block */}
          <div className="flex flex-col gap-2 max-w-xs w-full mt-3">
            <input
              className="bg-zinc-50 border rounded-sm px-1.5 py-2 text-xs placeholder:text-gray-500 outline-none focus:border-gray-400"
              type="text"
              placeholder="Phone number, username or email address"
            />
            <input
              className="bg-zinc-50 border rounded-sm px-1.5 py-2 text-xs placeholder:text-gray-500 outline-none focus:border-gray-400"
              type="password"
              placeholder="password"
            />
            <AuthButton text="Login" icon={false} />
          </div>

          {/* line */}
          <div className=" my-3 bg-zinc-300 relative max-w-xs w-full h-px before:content-['OR'] before:absolute before:-top-3 before:left-1/2 before:transform before:-translate-x-1/2  before:bg-white before:w-10 before:text-center before:text-sm before:font-semibold before:text-gray-500"></div>

          {/* facebook auth */}
          <div className="flex items-center justify-center gap-3">
            <FaFacebookSquare className="text-blue-900 text-xl" />
            <a className="cursor-pointer text-blue-900 text-sm font-medium">
              Login with Facebook
            </a>
          </div>
          <a className="cursor-pointer text-blue-900 text-xs font-medium">
            Forget your password?
          </a>
        </div>
        {/* switch auth */}
        <SwitchAccount
          text="Does not have an account?"
          link="/register"
          label="Sign up"
        />
      </div>
    </div>
  );
}

export default Login;
