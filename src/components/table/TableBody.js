import React, { useContext } from "react";
import { ApiCallContext } from "../../context/ApiCallContext";
import { FightDetailsContext } from "../../context/OpenFightDetailsContext";

export const TableBody = ({ allData }) => {
  const { valuesOfIsOpen, valuesOfData, apiCallToFlightData } =
    useContext(FightDetailsContext);
  const { flightData, setFlightData } = valuesOfData;
  const { open, setOpen } = valuesOfIsOpen;

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {allData.map((data) => (
        <tr
          key={data.flight_number}
          onClick={() => {
            setOpen(true);
            apiCallToFlightData(data.flight_number);
          }}
        >
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{data.flight_number}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {data.launch_date_local}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {data.launch_site.site_name}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{data.mission_name}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {data.rocket.second_stage.payloads[0].orbit}
            </div>
          </td>

          {data.launch_success ? (
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Sucess
              </span>
            </td>
          ) : (
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Failed
              </span>
            </td>
          )}

          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {data.rocket.rocket_name}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
