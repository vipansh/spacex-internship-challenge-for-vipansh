import React, { useState, useEffect } from "react";

export const ApiCallContext = React.createContext();

export function ApiCallProvider({ children }) {
  const [APIData, setAPIData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filters, setFilters] = useState();
  const [loading, setLoading] = useState(false);
  const [paginationNo, setPaginationNo] = useState(2);

  useEffect(async () => {
    setLoading(true);
    fetch(`https://space-x-api-iota.vercel.app/api/launches`)
      .then((response) => response.json())
      .then((data) => {
        setAPIData(data.data);
        setAllData(data.data.slice(0, 10));
        console.log(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function paginateChange(page_number) {
    setPaginationNo(page_number);
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    setAllData(APIData.slice((page_number - 1) * 10, page_number * 10));
  }

  return (
    <ApiCallContext.Provider
      value={{
        allData: allData,
        filterBy: { filters, setFilters },
        isLoading: { loading, setLoading },
        pageNumbers: { paginationNo, setPaginationNo },
        paginateChange: paginateChange,
      }}
    >
      {children}
    </ApiCallContext.Provider>
  );
}
