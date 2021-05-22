import React from "react";

const RowsFightDetails = ({ header, value }) => {
  return (
    <div className="flex py-4 border-b ">
      <div className="w-64">{header}</div>
      <div>{value}</div>
    </div>
  );
};

export default RowsFightDetails;
