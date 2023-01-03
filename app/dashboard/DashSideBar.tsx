import Link from "next/link";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";
import { AdminRoutes } from "./routes";
import Image from 'next/image'

type Props = {
  show: boolean;
  showSideBar: () => void;
};
//TODO: Enable vertical Scroll on the nav

const DashSideBar = ({ show, showSideBar }: Props) => {
  return (
    <aside className={`dash_sidebar ${show && "md:w-[14rem]"}`}>


      <HiOutlineChevronDoubleRight
        className={`bg-white text-neon-carrot-900
         text-3xl rounded-full
         absolute -right-3 top-9 border  border-neon-carrot-900 cursor-pointer ${
           !show && "rotate-180"
         }`}
        onClick={showSideBar}
      />

      <nav className="flex flex-col justify-between h-full overflow-hidden ">
        <div className=" mt-8">
          
             <div className="flex justify-center"> 
              <Image
                src="/img/pamuzi-white.png"
                width={100}
                height={100}
                alt="logo"
                className="text-center"
              />
            </div>
            
            <div className=""> 
            {AdminRoutes.map((route, index) => (
              <Link
                href={route.url}
                className="flex items-center py-4 pl-3 text-white transition-all hover:bg-neon-carrot-100 hover:text-neon-carrot-800"
                key={index}
              >
                {route.icon}
                <span className={`pl-4 ${!show && "hidden"}`}>{route.title} </span>
              </Link>
            ))}
            </div>
          
        </div>

        <Link
          href="#"
          className="flex items-center py-2 pl-3 text-white transition-all hover:bg-neon-carrot-100 hover:text-neon-carrot-800"
        >
          {" "}
          <span className="">
            <HiOutlineArrowRightOnRectangle className="h-6 w-6  mr-4 shrink-0" />{" "}
          </span>
          <span className={`pl-4 ${!show && "hidden"}`}>Logout</span>{" "}
        </Link>
      </nav>
    </aside>
  );
};

export default DashSideBar;
