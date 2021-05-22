import React from "react";
import RowsFightDetails from "./RowsFightDetails";

export const TableFightDetails = ({
  flightNumber,
  missionName,
  rocketType,
  launchData,
  orbit,
  launchSite,
  rocketName,
}) => {
  console.log(orbit.payloads[0]);
  return (
    <div>
      <RowsFightDetails header="Flight Number" value={flightNumber} />
      <RowsFightDetails header="Mission Name" value={missionName} />
      <RowsFightDetails header="Rocket Type" value={rocketType} />
      <RowsFightDetails header="Rocket Name" value={rocketName} />
      <RowsFightDetails header="Manufacturer" value="Space X" />
      <RowsFightDetails header="Nationality" value="Space X" />
      <RowsFightDetails header="Launch Date" value={launchData} />
      <RowsFightDetails
        header="Payload Type"
        value={orbit.payloads[0].payload_type}
      />
      <RowsFightDetails header="Orbit" value={orbit.payloads[0].payload_id} />
      <RowsFightDetails header="Launch Site" value={launchSite} />
    </div>
  );
};
