import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

interface AuthButton {
  text: String;
  icon: Boolean;
}

function AuthButton({ text, icon }: AuthButton) {
  return (
    <button
      className={
        icon
          ? "bg-sky-500 rounded-md text-white text-md font-semibold py-1 px-3 mt-2 flex justify-center items-center gap-3 max-w-xs w-full"
          : "bg-sky-400 rounded-md text-white text-md font-semibold py-1 px-3 mt-2 flex justify-center items-center gap-3"
      }
    >
      {icon && <FaFacebookSquare className="text-lg" />}
      <span>{text}</span>
    </button>
  );
}

export default AuthButton;
