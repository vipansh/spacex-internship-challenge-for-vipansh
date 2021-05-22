import React, { useContext } from "react";
import { ApiCallContext } from "../../context/ApiCallContext";
import { TableBody } from "./TableBody";

export const Table = () => {
  const { allData } = useContext(ApiCallContext);
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
          <div
            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg  "
            style={{ height: "39rem" }}
          >
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
                allData.length === 0 ? (
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                    <tr aria-rowspan={10}>
                      <td colSpan={7} className="items-center">
                        <div className="flex justify-center">
                          No results found for the specified filter
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <TableBody allData={allData} />
                )
              ) : (
                <tbody>
                  <tr rowSpan={10}>
                    <td colSpan={7}>
                      <div className="flex justify-center items-center my-auto h-96">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-16 w-16 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    </td>
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
