import React from "react";
import { useState, useEffect } from "react";
import Filters from "../components/filters/Filters";
import Header from "../components/header/Header";
import FlightDetails from "../Modals/FlightDetails";
import { Table } from "../components/table/Table";
import { FightDetailsProvider } from "../context/OpenFightDetailsContext";

const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {}, []);
  //   console.log(data);
  return (
    <div>
      <FightDetailsProvider>
        <FlightDetails />
        <Header />
        <div className="mx-auto">
          <div className="flex justify-end items-center my-2 w-full">
            <Filters />
          </div>
          <Table />
        </div>
      </FightDetailsProvider>
    </div>
  );
};

export default HomePage;
