import Link from "next/link";
import logo from "../../../../public/logo.jpeg";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Menu, DropdownLinks } from "@/app/constants/list";
import { FaCaretDown } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="bg-primary/90 py-2">
          <div className="container flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <Image src={logo} alt="Logo picture" className="w-10 uppercase" />
              Shop
              </Link>
            </div>
            {/* Search bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 dark"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
              {/* Order button */}
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              {/* <span className="group-hover:block hidden transition-all duration-200">Order</span> */}
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
            <IoHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
            <FaUserCircle className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Drakmode toggle button */}
            <div>
              <ToggleButton />
            </div>
            </div>
          </div>
          </div>

          <div className="flex justify-center">

<ul className="sm:flex hidden items-center gap-4 my-2">
  {
    Menu.map((data) => (
      <li key={data.id}>
        <Link href={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.name}</Link>
      </li>
    ))
  }
  {/* Dropdown and links */}
  <li className="group relative cursor-pointer">
    <Link href="/" className="flex items-center gap-[2px] py-2">Trending
    <span><FaCaretDown className="trasition-all duration-200 group-hover:rotate-180" /></span>
    </Link>
    <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-xl">
      <ul>
        {DropdownLinks.map((data) => (
          <li key={data.id}>
            <Link href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
</ul>

          {/* <nav>
            <ul className="lg:flex items-center justify-center text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav> */}
          </div>
      </div>
    </>
  );
}

{
  /* <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <a href="#">
            <svg
              width="32"
              height="36"
              viewBox="0 0 32 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path>
            </svg>
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
         
          <div> */
}
{
  /* <Link
            className="font-extrabold text-white bg-black hover:bg-white hover:text-black hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
            href="/login"
          >
            Login
          </Link> */
}
// <button
//     className="font-extrabold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
//     type="submit"
//   >Login</button>
//   </div>
//   </div>
// </header>
