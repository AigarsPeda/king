import React from "react";

const TrophyIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 22"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M13.408 17C13.906 13.053 19 9.803 19 0H5c0 9.803 5.105 13.053 5.604 17h2.804zM5.991 9.656c.286.638.585 1.231.882 1.783C2.808 10.091.372 6.105 0 2h4.077c.036.482.08.955.139 1.405H1.527c.427 2.001 1.549 4.729 4.464 6.251zM16 20.619V22H8v-1.381c1.941 0 2.369-1.433 2.571-2.619h2.866c.193 1.187.565 2.619 2.563 2.619zM24 2c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405H24V2z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default TrophyIcon;
