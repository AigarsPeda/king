import React from "react";

const MarkIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 19"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M20.285 0L9 11.567 3.714 6.556 0 10.272 9 19 24 3.715 20.285 0z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default MarkIcon;
