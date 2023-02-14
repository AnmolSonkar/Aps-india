import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div className="fixed bg-white w-full  z-20  top-0 left-0 shadow-lg">
      <div className="flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4 text-[#666666]">
        <h1 className="text-3xl font-bold">
          <img src="APS.png" className="lg:w-40 w-32" alt="Logo" />
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/Apseligibility">Eligibility Check</Link>
          </li>

          <li className="p-4">
            <Link to="/Aps">APS Process</Link>
          </li>
          <li className="p-4">
            <Link to="/">German Calculator</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          ref={navRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 shadow-md bg-white ease-in-out duration-500"
              : "ease-in-out duration-500  fixed left-[-100%]"
          }
        >
          <h1 className=" text-3xl font-bold m-4 mt-10">
            <img src="APS.png" className="w-36" alt="Logo" />
          </h1>
          <li className="p-4 mt-10  border-b border-gray-30">
            <Link to="/Apseligibility">Eligibility Check</Link>
          </li>

          <li className="p-4 border-b border-gray-300">
            <Link to="/Aps">APS Process</Link>
          </li>
          <li className="p-4">
            <Link to="/">German Calculator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
