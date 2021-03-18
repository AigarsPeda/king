import React from "react";

const IconCrown = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 64 54"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M8 37.333L0 10.667l18.944 10.666L32 0l13.056 21.333L64 10.667l-8 26.666H8zm0 5.334v10.666h48V42.667H8z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default IconCrown;
