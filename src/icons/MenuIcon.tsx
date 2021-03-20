import React from "react";

const MenuIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 20"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M24 4H0V0h24v4zm0 4H0v4h24V8zm0 8H0v4h24v-4z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default MenuIcon;
