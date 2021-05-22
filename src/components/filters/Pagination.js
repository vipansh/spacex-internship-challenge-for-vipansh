import { useContext } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { ApiCallContext } from "../../context/ApiCallContext";

export default function Pagination() {
  const { paginateChange, pageNumbers } = useContext(ApiCallContext);
  const { paginationNo, setPaginationNo } = pageNumbers;
  const pageNumbersArr = [];

  for (let i = 1; i <= 11; i++) {
    pageNumbersArr.push(i);
  }
  const firstGroup = [1, 2, 3];

  const secondGroup = [9, 10, 11];
  console.log(firstGroup, secondGroup);

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
            Showing <span className="font-medium">{paginationNo * 10 - 9}</span>{" "}
            to <span className="font-medium">{paginationNo * 10}</span> of{" "}
            <span className="font-medium">110</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </span>

            {firstGroup.map((v, i) => {
              return (
                <span
                  key={i}
                  onClick={() => {
                    paginateChange(v);
                  }}
                  aria-current="page"
                  className={
                    (v === paginationNo ? activeNumber : defaultNumber) +
                    "relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                >
                  {v}
                </span>
              );
            })}

            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            {secondGroup.map((v, i) => {
              return (
                <span
                  key={i}
                  onClick={() => {
                    paginateChange(v);
                  }}
                  aria-current="page"
                  className={
                    (v === paginationNo ? activeNumber : defaultNumber) +
                    "relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                >
                  {v}
                </span>
              );
            })}

            <span className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
