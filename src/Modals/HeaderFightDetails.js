import React from "react";
import { useHistory } from "react-router";
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
  let history = useHistory();

  return (
    <div className="flex justify-between text-xl p-4">
      {/* image plus name plus links */}
      <div className="flex justify-between ">
        <div id="image mx-4">
          <img className="h-20" src={imgSrc} alt="img" />
        </div>
        <div id="name_links" className="mx-4 ">
          <div className="font-bold">{missionName}</div>
          <div className="text-base py-2">{rocketName}</div>
          <div className="flex justify-between">
            <a href={articleLink}>
              <img src={nasa} alt="nasa" />
            </a>
            <a href={wikiLink}>
              <img src={wiki} alt="wiki" />
            </a>
            <a href={youtubeLink}>
              <img src={youtube} alt="youTube" />
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
          onClick={() => {
            setOpen(false);
            history.push("/");
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
