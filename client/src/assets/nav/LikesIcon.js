import React from "react";

const LikesIcon = props => {
  return (
    <div>
      <svg
        className={props.class}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.5 11.5H22.5L11.5833 24L1.5 11.5Z" fill="inherit" />
        <path
          d="M14 7C14 10.866 10.866 14.5 7 14.5C3.13401 14.5 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
          fill="inherit"
        />
        <path
          d="M24 7C24 10.866 20.866 14.5 17 14.5C13.134 14.5 10 10.866 10 7C10 3.13401 13.134 0 17 0C20.866 0 24 3.13401 24 7Z"
          fill="inherit"
        />
      </svg>
    </div>
  );
};

export default LikesIcon;
