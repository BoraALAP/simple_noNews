import React from "react";

const CategoryIcon = props => {
  return (
    <svg
      className={props.class}
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="4" height="4" rx="2" fill="inherit" />
      <rect y="8" width="4" height="4" rx="2" fill="inherit" />
      <rect y="16" width="4" height="4" rx="2" fill="inherit" />
      <rect x="6" width="18" height="4" rx="2" fill="inherit" />
      <rect x="6" y="8" width="18" height="4" rx="2" fill="inherit" />
      <rect x="6" y="16" width="18" height="4" rx="2" fill="inherit" />
    </svg>
  );
};

export default CategoryIcon;
