import React from "react";
import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeaderFightDetails } from "./HeaderFightDetails";
import { TextFightDetails } from "./TextFightDetails";
import { TableFightDetails } from "./TableFightDetails";
import { FlightDetailsContext } from "../context/OpenFlightDetailsContext";
import { useHistory, useLocation } from "react-router";

export default function FlightDetails() {
  const { valuesOfData, apiCallToFlightData } =
    useContext(FlightDetailsContext);
  const { flightData } = valuesOfData;
  const [open, setOpen] = useState(false);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let history = useHistory();
  let query = useQuery();

  useEffect(() => {
    if (query.get("openModel")) {
      setOpen(true);
      apiCallToFlightData(query.get("id"));
    } else {
      setOpen(false);
    }
  }, [query.get("id")]);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-hidden p-4"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={() => {
          setOpen(false);
          history.push("/");
        }}
      >
        <div className="flex items-end justify-center min-h-screen  p-4  text-center sm:block ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block p-4  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-1/2 ">
              <div className="mt-4" ref={cancelButtonRef}>
                {flightData ? (
                  <div className="text-sm">
                    <HeaderFightDetails
                      setOpen={setOpen}
                      imgSrc={flightData.links.mission_patch_small}
                      missionName={flightData.mission_name}
                      rocketName={flightData.rocket.rocket_name}
                      youtubeLink={flightData.links.video_link}
                      wikiLink={flightData.links.wikipedia}
                      articleLink={flightData.links.article_link}
                      status={flightData.launch_success}
                    />
                    <TextFightDetails
                      details={flightData.details}
                      wikiLink={flightData.links.wikipedia}
                    />
                    <div>
                      <TableFightDetails
                        flightNumber={flightData.flight_number}
                        missionName={flightData.mission_name}
                        rocketType={flightData.rocket.rocket_type}
                        rocketName={flightData.rocket.rocket_name}
                        launchData={flightData.launch_date_local}
                        orbit={flightData.rocket.second_stage}
                        launchSite={flightData.launch_site.site_name}
                      />
                    </div>
                  </div>
                ) : (
                  <div>Loading</div>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
