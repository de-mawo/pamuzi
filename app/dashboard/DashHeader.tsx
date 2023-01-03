

import Image from "next/image";
import { HiMagnifyingGlass,  HiOutlineBellAlert } from "react-icons/hi2";
import ToggleDarkLight from "../ToggleDarkLight";

//Todo: TroubleShoot Why Toogle DarkMode is not working

const DashHeader = () => {
  return (
    <header>
      <nav className="p-4  bg-neon-carrot-100 ">
        <div className="flex flex-wrap justify-between items-center mx-8 ">
          {/* LEFT SIDE */}
          <div className="flex justify-end items-center">

            <form className="hidden lg:block lg:pl-2">
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <HiMagnifyingGlass
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-700 "
                  />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 "
                  placeholder="Search"
                />
              </div>
            </form>
          </div>

          {/* RIGHT SIDE  */}

          <div className="flex items-center space-x-6">
            {/* <button>
              <ToggleDarkLight />
            </button> */}
            <button>
              <HiOutlineBellAlert className="h-6 w-6 cursor-pointer text-neon-carrot-900" />
            </button>
            <button>
              <Image
                src="https://res.cloudinary.com/demawo/image/upload/v1651849033/chefy_taste/wn0uppzmavn9k7zhb3qx.png"
                alt="chefy"
                width={30}
                height={30}
                className=" w-full object-cover rounded-full "
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashHeader;