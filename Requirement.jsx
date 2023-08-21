import React from "react";
import { FaCheck } from "react-icons/fa";
const Requirement = ({ htmlFor, isvalid, validMessage, invalidMessage }) => (
  <label htmlFor={htmlFor} className={!isvalid ? `invalid` : `valid`}>
    <FaCheck />
    <span>{!isvalid ? invalidMessage : validMessage}</span>
  </label>
);
export default Requirement;