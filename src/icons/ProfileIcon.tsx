import React from "react";

const ProfileIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418C20.452 4.766 16.983 0 12 0 6.918 0 3.536 4.949 8.268 13.678c1.597 2.945-1.725 3.641-5.09 4.418C.105 18.806-.01 20.332 0 23l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default ProfileIcon;
