import React, { useContext, useState } from "react";

export const ApiCallContext = React.createContext();

export function ApiCallProvider({ children }) {
  const [allData, setAllData] = useState([]);
  const [filters, setFilters] = useState();
  const [loading, setLoading] = useState(false);

  React.useEffect(async () => {
    setLoading(true);
    fetch(`https://space-x-api-iota.vercel.app/api/launches`)
      .then((response) => response.json())
      .then((data) => {
        setAllData(data.data);
        console.log(data)
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {}, [filters]);

  return (
    <ApiCallContext.Provider
      value={{
        allData: allData,
        filterBy: { filters, setFilters },
        isLoading: { loading, setLoading },
      }}
    >
      {children}
    </ApiCallContext.Provider>
  );
}
