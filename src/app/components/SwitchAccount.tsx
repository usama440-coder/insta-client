import React from "react";
import Link from "next/link";
import { UrlObject } from "url";

interface Switch {
  text: String;
  link: string | UrlObject;
  label: String;
}

const SwitchAccount = ({ text, link, label }: Switch) => {
  return (
    <div className="border max-w-sm py-4 flex justify-center items-center gap-2 text-sm mt-3">
      {text}
      <Link className="text-sky-600 font-medium" href={link}>
        {label}
      </Link>
    </div>
  );
};

export default SwitchAccount;
