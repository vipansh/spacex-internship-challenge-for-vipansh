import React from "react";
import nasa from "../assets/nasa.svg";
import wiki from "../assets/wiki.svg";
import youtube from "../assets/youtube.svg";

export const HeaderFightDetails = ({ setOpen }) => {
  return (
    <div className="flex justify-between">
      {/* image plus name plus links */}
      <div className="flex">
        <div id="image">
          <img className="h-20" src="/" alt="img" />
        </div>
        <div id="name_links">
          <div>CRS-1</div>
          <div>Falcon 9</div>
          <div className="flex">
            <img src={nasa} />
            <img src={wiki} />
            <img src={youtube} />
          </div>
        </div>
        <div id="result">Sucess</div>
      </div>

      {/* for close button */}
      <div>
        <button
          type="button"
          className=" w-12  "
          onClick={() => setOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};
