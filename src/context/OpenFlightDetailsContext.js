import React, { useState } from "react";

export const FlightDetailsContext = React.createContext();

export function FlightDetailsProvider({ children }) {
  const [flightData, setFlightData] = useState();

  const apiCallToFlightData = async (flightNo = 1) => {
    try {
      const response = await fetch(
        `https://space-x-api-iota.vercel.app/api/launches/${flightNo}`
      );
      const json = await response.json();
      setFlightData(json.data);
    } catch (e) {
      console.error(e);
    }
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
