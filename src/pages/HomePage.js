import React, { useContext } from "react";
import Filters from "../components/filters/Filters";
import Header from "../components/header/Header";
import FlightDetails from "../Modals/FlightDetails";
import { Table } from "../components/table/Table";
import { ApiCallContext } from "../context/ApiCallContext";
import Pagination from "../components/filters/Pagination";

import { FlightDetailsProvider } from "../context/OpenFlightDetailsContext";

const HomePage = () => {
  const { allData } = useContext(ApiCallContext);

  return (
    <div>
      <FlightDetailsProvider>
        <FlightDetails />
        <Header />
        <div className="mx-auto">
          <div className="flex justify-end items-center my-2 w-full">
            <Filters />
          </div>
          <Table />
          {allData ? allData.length > 0 && <Pagination /> : null}
        </div>
      </FlightDetailsProvider>
    </div>
  );
};

export default HomePage;
