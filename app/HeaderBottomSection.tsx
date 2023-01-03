"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { HiMagnifyingGlass, HiMapPin } from "react-icons/hi2";


// type DateRange = {
//   startDate: Date;
//   endDate: Date;
// };

const HeaderBottomSection = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <> 
    <section className="flex flex-col mx-4 pb-4 space-y-4 md:grid grid-cols-4 md:mx-12 md:gap-4 ">
      <div className="relative md:mt-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <HiMapPin
            aria-hidden="true"
            className="w-5 h-5 text-neon-carrot-700 "
          />
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-neon-carrot-300 focus:border-neon-carrot-300 "
          placeholder="Search location"
        />
      </div>

      <Datepicker
        containerClassName="border p-4 md:p-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-neon-carrot-300 focus:border-neon-carrot-300"
        primaryColor={"orange"}
        value={value}
        onChange={handleValueChange}
        placeholder={"Select Date Range"} 
        showShortcuts={true}
        showFooter={true} 
      />
      <select
        name="price"
        className="p-4 md:p-2 text-gray-900 border border-gray-300 rounded-md  bg-gray-50 focus:outline-none focus:ring-neon-carrot-300 focus:border-neon-carrot-300"
      >
        <option value="volvo" className="hover:bg-neon-carrot-300">
         $0-250
        </option>
        <option value="saab">$250-500</option>
        <option value="opel">$500-1000</option>
        <option value="audi">$1000+</option>
      </select>

      <button className=" relative font-semibold bg-neon-carrot-500 hover:bg-neon-carrot-600 text-white  p-4 lg:px-8  lg:py-2 rounded-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <HiMagnifyingGlass aria-hidden="true" className="w-5 h-5 " />
        </div>
        Search
      </button>
    </section>
    
    
    </>
    
  );
};

export default HeaderBottomSection;
