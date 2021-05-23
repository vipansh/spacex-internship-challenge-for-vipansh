import React, { useState, useEffect } from "react";

export const ApiCallContext = React.createContext();

export function ApiCallProvider({ children }) {
  const [APIData, setAPIData] = useState();
  const [copyOfApi, setCopyOfApi] = useState([]);
  const [allData, setAllData] = useState();
  const [loading, setLoading] = useState(false);
  const [paginationNo, setPaginationNo] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://space-x-api-iota.vercel.app/api/launches`
        );
        const json = await response.json();
        setLoading(true);
        setAPIData(json.data);
        setCopyOfApi(json.data);
        setAllData(json.data.slice(0, 10));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  function paginateChange(page_number, ar = copyOfApi) {
    setPaginationNo(page_number);
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    setAllData(ar.slice((page_number - 1) * 10, page_number * 10));
  }

  function filterApi(filterBy) {
    let filteredArr = [];
    switch (filterBy) {
      case "Upcoming Launches":
        filteredArr = [];
        break;
      case "Successful Launches":
        filteredArr = APIData.filter((x) => x.launch_success);
        break;
      case "Failed Launches":
        filteredArr = APIData.filter((x) => !x.launch_success);
        break;
      default:
        filteredArr = [...APIData];
    }
    setCopyOfApi(filteredArr);
    paginateChange(1, filteredArr);
  }

  return (
    <ApiCallContext.Provider
      value={{
        allData: allData,
        filterApi: filterApi,
        totalNo: copyOfApi.length,
        isLoading: { loading, setLoading },
        pageNumbers: { paginationNo, setPaginationNo },
        paginateChange: paginateChange,
      }}
    >
      {children}
    </ApiCallContext.Provider>
  );
}
