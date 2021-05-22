import React, { useContext, useState } from "react";

export const FlightDetailsContext = React.createContext();

export function FlightDetailsProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [flightData, setFlightData] = useState();

  const apiCallToFlightData = (flightNo = 1) => {
    fetch(`https://space-x-api-iota.vercel.app/api/launches/${flightNo}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setFlightData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <FlightDetailsContext.Provider
      value={{
        valuesOfIsOpen: { open, setOpen },
        valuesOfData: { flightData, setFlightData },
        apiCallToFlightData: apiCallToFlightData,
      }}
    >
      {children}
    </FlightDetailsContext.Provider>
  );
}
