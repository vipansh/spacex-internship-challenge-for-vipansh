import React from "react";
import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FightDetailsContext } from "../context/OpenFightDetailsContext";
import { HeaderFightDetails } from "./HeaderFightDetails";
import { TextFightDetails } from "./TextFightDetails";
import { TableFightDetails } from "./TableFightDetails";

export default function FlightDetails() {
  const { valuesOfIsOpen, valuesOfData } = useContext(FightDetailsContext);
  const { flightData, setFlightData } = valuesOfData;
  const { open, setOpen } = valuesOfIsOpen;

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-hidden p-4"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen  p-4  text-center sm:block ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block p-4  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-1/2 ">
              <div className="mt-4">
                <HeaderFightDetails setOpen={setOpen} />
                <TextFightDetails />
                <div>
                  <TableFightDetails />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
