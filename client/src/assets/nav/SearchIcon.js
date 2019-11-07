import React from "react";

const SearchIcon = props => {
  return (
    <svg
      className={props.class}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14Z"
        fill="inherit"
      />
      <rect
        x="10.9389"
        y="14.2101"
        width="4"
        height="13.117"
        rx="2"
        transform="rotate(-45 10.9389 14.2101)"
        fill="inherit"
      />
    </svg>
  );
};

export default SearchIcon;
