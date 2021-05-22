import React, { useContext, useState } from "react";

export const FightDetailsContext = React.createContext();

export function FightDetailsProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [flightData, setFlightData] = useState();
  const [loading, setLoading] = useState(false);
  
  const apiCallToFlightData = (flightNo = 1) => {
    setLoading(true);
    fetch(`https://space-x-api-iota.vercel.app/api/launches/${flightNo}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setFlightData(data.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <FightDetailsContext.Provider
      value={{
        valuesOfIsOpen: { open, setOpen },
        valuesOfData: { flightData, setFlightData },
        apiCallToFlightData: apiCallToFlightData,
      }}
    >
      {children}
    </FightDetailsContext.Provider>
  );
}
