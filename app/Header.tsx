import Link from "next/link";
import React from "react";
import ToogleDarkLight from "./ToogleDarkLight";
import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";
import HeaderBottomSection from "./HeaderBottomSection";

const Header = () => {
  return (
    <header style={{
      backgroundImage: `url(/img/safari.jpg)`,
    }}>
      {/* TOP SECTION  */}
      <div className="grid grid-cols-2 p-10 items-center">
        <Image
          src="/img/pamuzi-black.png"
          width={50}
          height={50}
          alt="logo"
          className="border border-neon-carrot-600 rounded-full"
        />

        <div className="hidden md:flex items-center justify-end space-x-4">
          {/* <ToogleDarkLight /> */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="secondary-btn">
              Login
            </Link>
            <Link href="/signup" className="secondary-btn">
              Signup
            </Link>
          </div>
          <Link href="/login" className=" primary-btn ">
            List your Lodge
          </Link>
        </div>
      </div>

      {/* MID SECTION  */}

      <section className="text-center lg:my-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neon-carrot-900 md:text-5xl lg:text-6xl ">
          Pamuzi is a great achievement
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          ... a Southern African Experience
        </p>
      </section>

{/* BOTTOM SECTION  */}
      <HeaderBottomSection/>
    </header>
  );
};

export default Header;
