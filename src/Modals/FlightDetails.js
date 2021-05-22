import React from "react";
import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeaderFightDetails } from "./HeaderFightDetails";
import { TextFightDetails } from "./TextFightDetails";
import { TableFightDetails } from "./TableFightDetails";
import { data } from "autoprefixer";
import { FlightDetailsContext } from "../context/OpenFlightDetailsContext";

export default function FlightDetails() {
  const { valuesOfIsOpen, valuesOfData } = useContext(FlightDetailsContext);
  const { flightData, setFlightData } = valuesOfData;
  const { open, setOpen } = valuesOfIsOpen;

  const cancelButtonRef = useRef(null);

  const dummyData = {
    flight_number: 65,
    mission_name: "Telstar 19V",
    mission_id: ["F4F83DE"],
    launch_year: "2018",
    launch_date_unix: 1532238600,
    launch_date_utc: "2018-07-22T05:50:00.000Z",
    launch_date_local: "2018-07-22T01:50:00-04:00",
    is_tentative: false,
    tentative_max_precision: "hour",
    tbd: false,
    launch_window: 7200,
    rocket: {
      rocket_id: "falcon9",
      rocket_name: "Falcon 9",
      rocket_type: "FT",
      first_stage: {
        cores: [
          {
            core_serial: "B1047",
            flight: 1,
            block: 5,
            gridfins: true,
            legs: true,
            reused: false,
            land_success: true,
            landing_intent: true,
            landing_type: "ASDS",
            landing_vehicle: "OCISLY",
          },
        ],
      },
      second_stage: {
        block: 5,
        payloads: [
          {
            payload_id: "Telstar 19V",
            norad_id: [43562],
            reused: false,
            customers: ["Telesat"],
            nationality: "Canada",
            manufacturer: "SSL",
            payload_type: "Satellite",
            payload_mass_kg: 7076,
            payload_mass_lbs: 15600,
            orbit: "GTO",
            orbit_params: {
              reference_system: "geocentric",
              regime: "geostationary",
              longitude: -65,
              semi_major_axis_km: 42163.837,
              eccentricity: 0.0001327,
              periapsis_km: 35780.107,
              apoapsis_km: 35791.297,
              inclination_deg: 0.0126,
              period_min: 1436.051,
              lifespan_years: 15,
              epoch: "2019-02-03T19:17:09.000Z",
              mean_motion: 1.00274977,
              raan: 130.2989,
              arg_of_pericenter: 165.1069,
              mean_anomaly: 64.5495,
            },
          },
        ],
      },
      fairings: {
        reused: false,
        recovery_attempt: false,
        recovered: false,
        ship: null,
      },
    },
    ships: ["GOPURSUIT", "GOQUEST", "HAWK", "OCISLY"],
    telemetry: {
      flight_club: "https://www.flightclub.io/results/?code=TS19V",
    },
    launch_site: {
      site_id: "ccafs_slc_40",
      site_name: "CCAFS SLC 40",
      site_name_long:
        "Cape Canaveral Air Force Station Space Launch Complex 40",
    },
    launch_success: true,
    links: {
      mission_patch: "https://images2.imgbox.com/c5/53/5jklZkPz_o.png",
      mission_patch_small: "https://images2.imgbox.com/12/7c/NiniYxoh_o.png",
      reddit_campaign:
        "https://www.reddit.com/r/spacex/comments/8w19yg/telstar_19v_launch_campaign_thread/",
      reddit_launch:
        "https://www.reddit.com/r/spacex/comments/90p1a6/rspacex_telstar_19v_official_launch_discussion/",
      reddit_recovery: null,
      reddit_media:
        "https://www.reddit.com/r/spacex/comments/90oxrr/rspacex_telstar_19v_media_thread_videos_images/",
      presskit:
        "http://www.spacex.com/sites/spacex/files/telstar19vantagepresskit.pdf",
      article_link:
        "https://spaceflightnow.com/2018/07/22/spacex-delivers-for-telesat-with-successful-early-morning-launch/",
      wikipedia: "https://en.wikipedia.org/wiki/Telstar_19V",
      video_link: "https://www.youtube.com/watch?v=xybp6zLaGx4",
      youtube_id: "xybp6zLaGx4",
      flickr_images: [
        "https://farm1.staticflickr.com/856/28684550147_49802752b3_o.jpg",
        "https://farm1.staticflickr.com/927/28684552447_956a9744f1_o.jpg",
        "https://farm2.staticflickr.com/1828/29700007298_8ac5891d2c_o.jpg",
        "https://farm1.staticflickr.com/914/29700004918_31ed7b73ef_o.jpg",
        "https://farm1.staticflickr.com/844/29700002748_3047e50a0a_o.jpg",
        "https://farm2.staticflickr.com/1786/29700000688_2514cd3cbb_o.jpg",
      ],
    },
    details:
      "SSL-manufactured communications satellite intended to be placed at 63° West over the Americas. At 7,075 kg, it became the heaviest commercial communications satellite ever launched.",
    upcoming: false,
    static_fire_date_utc: "2018-07-18T21:00:00.000Z",
    static_fire_date_unix: 1531947600,
    timeline: {
      webcast_liftoff: 899,
      go_for_prop_loading: -2280,
      rp1_loading: -2100,
      stage1_lox_loading: -2100,
      stage2_lox_loading: -960,
      engine_chill: -420,
      prelaunch_checks: -60,
      propellant_pressurization: -60,
      go_for_launch: -45,
      ignition: -3,
      liftoff: 0,
      maxq: 72,
      meco: 150,
      stage_sep: 153,
      second_stage_ignition: 154,
      fairing_deploy: 220,
      first_stage_entry_burn: 372,
      "seco-1": 492,
      first_stage_landing: 509,
      second_stage_restart: 1609,
      "seco-2": 1659,
      payload_deploy: 1960,
    },
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-hidden p-4"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
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
                  <div>
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
