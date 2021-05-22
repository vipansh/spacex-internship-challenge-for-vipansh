import React from "react";
import Filters from "../components/filters/Filters";
import Header from "../components/header/Header";
import FlightDetails from "../Modals/FlightDetails";
import { Table } from "../components/table/Table";
import { ApiCallProvider } from "../context/ApiCallContext";
import Pagination from "../components/filters/Pagination";

import { FlightDetailsProvider } from "../context/OpenFlightDetailsContext";

const HomePage = () => {
 

  return (
    <div>
      <ApiCallProvider>
        <FlightDetailsProvider>
          <FlightDetails />
          <Header />
          <div className="mx-auto">
            <div className="flex justify-end items-center my-2 w-full">
              <Filters />
            </div>
            <Table />
            <Pagination />
          </div>
        </FlightDetailsProvider>
      </ApiCallProvider>
    </div>
  );
};

export default HomePage;
