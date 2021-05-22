import React, { useState } from "react";

export const FlightDetailsContext = React.createContext();

export function FlightDetailsProvider({ children }) {
  const [flightData, setFlightData] = useState();

  const apiCallToFlightData = (flightNo = 1) => {
    if (flightData) {
      if (flightNo === flightData.launch_no) {
        console.log("Same Data");
        return;
      }
    }
    fetch(`https://space-x-api-iota.vercel.app/api/launches/${flightNo}`)
      .then((response) => response.json())
      .then((data) => {
        setFlightData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <FlightDetailsContext.Provider
      value={{
        valuesOfData: { flightData, setFlightData },
        apiCallToFlightData: apiCallToFlightData,
      }}
    >
      {children}
    </FlightDetailsContext.Provider>
  );
}
