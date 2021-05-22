import { useContext, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { ApiCallContext } from "../../context/ApiCallContext";
import { paginate } from "../../utli";

export default function Pagination() {
  const { paginateChange, pageNumbers, totalNo } = useContext(ApiCallContext);

  const { paginationNo, setPaginationNo } = pageNumbers;
  let peginationData;
  peginationData = paginate(totalNo, paginationNo, 10, 5);

  useEffect(() => {
    console.log(peginationData);
  }, [paginationNo]);

  const activeNumber = "z-10 bg-indigo-50 border-indigo-500 text-indigo-600";
  const defaultNumber =
    "bg-white border-gray-300 text-gray-500 hover:bg-gray-50";

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </span>
        <span className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </span>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{peginationData.startIndex}</span> to{" "}
            <span className="font-medium">{peginationData.endIndex}</span> of{" "}
            <span className="font-medium">{peginationData.totalItems}</span>{" "}
            results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className={
                  "h-5 w-5 " +
                  (paginationNo === 1
                    ? "cursor-not-allowed"
                    : " cursor-pointer")
                }
                aria-hidden="true"
                onClick={() => {
                  if (paginationNo !== 1) {
                    paginateChange(paginationNo - 1);
                  }
                }}
              />
            </span>

            {peginationData.pages.map((v, i) => {
              return (
                <span
                  key={i}
                  onClick={() => {
                    paginateChange(v);
                  }}
                  aria-current="page"
                  className={
                    (v === paginationNo ? activeNumber : defaultNumber) +
                    "relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
                  }
                >
                  {v}
                </span>
              );
            })}

            <span className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className={
                  "h-5 w-5 " +
                  (paginationNo === 11
                    ? "cursor-not-allowed"
                    : "cursor-pointer")
                }
                aria-hidden="true"
                onClick={() => {
                  if (paginationNo !== 11) {
                    paginateChange(paginationNo + 1);
                  }
                }}
              />
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
