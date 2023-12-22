import { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setNav(true);
    });
  }, [nav]);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full
          focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* Cart Button */}

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* Mobile menu */}
      {/* Overlay */}

      <div
        className={`bg-black/80 fixed ${
          nav ? "w-[0px] h-0" : "w-full h-screen"
        } z-10 top-0 left-0`}
        onClick={() => setNav(true)}
      ></div>

      {/* Side drawer menu */}
      <div
        className={`fixed top-0 ${
          nav ? "left-[-100%]" : "left-0"
        } w-[300px] h-screen bg-white z-10 duration-300`}
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(true)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex hover:text-gray-500 duration-200 cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex hover:text-gray-500 duration-200 cursor-pointer">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex hover:text-gray-500 duration-200 cursor-pointer">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex hover:text-gray-500 duration-200 cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex hover:text-gray-500 duration-200 cursor-pointer">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex hover:text-gray-500 duration-200 cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex hover:text-gray-500 duration-200 cursor-pointer">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
