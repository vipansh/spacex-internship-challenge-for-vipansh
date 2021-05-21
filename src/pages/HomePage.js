import React from "react";
import Filters from "../components/filters/Filters";
import Header from "../components/header/Header";
import { Table } from "../components/table/Table";

const HomePage = () => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
   


  }, []);
  //   console.log(data);
  return (
    <div>
      <Header />
      <div  className="mx-auto">
        <div className="flex justify-end items-center my-2 w-full">
          <Filters />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
