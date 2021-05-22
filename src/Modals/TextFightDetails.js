import React from "react";

export const TextFightDetails = ({ details, wikiLink }) => {
  console.log(details);
  return (
    <div>
      <p className="my-2">
        {details}.
        <a className="text-blue-500 cursor-pointer mx-2" href={wikiLink}>
          Wikipedia
        </a>
      </p>
    </div>
  );
};
