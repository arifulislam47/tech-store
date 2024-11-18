import React from "react";
import { Link } from "react-router-dom";

const Li = ({liText, className, to}) => {
  return (
    <ul className={`${className}`}>
      <li>
        <Link to={to} >{liText}</Link>
      </li>
    </ul>
  );
};

export default Li;
