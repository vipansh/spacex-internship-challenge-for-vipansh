import React from "react";
import nasa from "../assets/nasa.svg";
import wiki from "../assets/wiki.svg";
import youtube from "../assets/youtube.svg";

export const HeaderFightDetails = ({
  setOpen,
  imgSrc,
  missionName,
  rocketName,
  youtubeLink,
  wikiLink,
  articleLink,
  status,
}) => {
  return (
    <div className="flex justify-between">
      {/* image plus name plus links */}
      <div className="flex">
        <div id="image">
          <img className="h-20" src={imgSrc} alt="img" />
        </div>
        <div id="name_links">
          <div>{missionName}</div>
          <div>{rocketName}</div>
          <div className="flex">
            <a href={articleLink}>
              <img src={nasa} />
            </a>
            <a href={wikiLink}>
              <img src={wiki} />
            </a>
            <a href={youtubeLink}>
              <img src={youtube} />
            </a>
          </div>
        </div>
        <div id="result">
          {status ? (
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Sucess
              </span>
            </td>
          ) : (
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Failed
              </span>
            </td>
          )}
        </div>
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
