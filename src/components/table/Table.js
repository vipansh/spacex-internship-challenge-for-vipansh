import React, { useContext } from "react";
import { ApiCallContext } from "../../context/ApiCallContext";
import { TableBody } from "./TableBody";

export const Table = () => {
  const { allData, isLoading } = useContext(ApiCallContext);
  const { loading, setLoading } = isLoading;
  const tableHeader = [
    "No:",
    "Launched (UTC)",
    "Location",
    "Mission",
    "Orbit",
    "Launch Status",
    "Rocket",
  ];

  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto ">
        <div className=" align-middle inline-block min-w-full  ">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeader.map((header) => {
                    return (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              {allData ? (
                <TableBody allData={allData} />
              ) : (
                <tbody>
                  <tr>
                    <td>loading</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
