import React from "react";

const ProfileIcon = props => {
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
        d="M5.63649 12.998C2.2511 15.1196 0 18.8837 0 23.1736V24.0001H24V23.1736C24 18.8837 21.7489 15.1196 18.3635 12.998C16.9019 14.8876 14.5953 16.1069 12 16.1069C9.40474 16.1069 7.09812 14.8876 5.63649 12.998Z"
        fill="inherit"
      />
      <circle cx="12" cy="7" r="7" fill="inherit" />
    </svg>
  );
};

export default ProfileIcon;
