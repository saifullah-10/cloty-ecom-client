"use client";
import Image from "next/image";
import {
  CiHeart,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import MainLogo from "@/public/assets/logos/logo.png";
import Link from "next/link";

import "../../../styles/navbar.css";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const navMenu = (active: string, setActive: (value: string) => void) => {
  return (
    <ul className=" flex-col md:flex-row gap-5 font-light flex items-center md:gap-5 lg:gap-8">
      <Link href="/">
        <li
          className={`nav-item ${active === "home" ? "activeLine" : ""}`}
          onClick={() => setActive("home")}
        >
          Home
        </li>
      </Link>
      <Link href="/">
        <li
          className={`nav-item ${active === "shop" ? "activeLine" : ""}`}
          onClick={() => setActive("shop")}
        >
          Shop
        </li>
      </Link>
      <Link href="/">
        <li
          className={`nav-item ${active === "collection" ? "activeLine" : ""}`}
          onClick={() => setActive("collection")}
        >
          Collection
        </li>
      </Link>
      <Link href="/">
        <li
          className={`nav-item ${active === "blogs" ? "activeLine" : ""}`}
          onClick={() => setActive("blogs")}
        >
          Blogs
        </li>
      </Link>
      <Link href="/">
        <li
          className={`nav-item ${active === "pages" ? "activeLine" : ""}`}
          onClick={() => setActive("pages")}
        >
          Pages
        </li>
      </Link>
      <Link href="/">
        <li
          className={`nav-item ${active === "login" ? "activeLine" : ""}`}
          onClick={() => setActive("login")}
        >
          Login
        </li>
      </Link>
    </ul>
  );
};
const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className=" w-full font-montserrat border-2 py-1 lg:py-3 ">
        <div className=" flex items-center md:max-w-screen-xl w-11/12  mx-auto justify-between ">
          <div className="flex relative items-center  gap-10">
            <div>
              <Image src={MainLogo} alt="logo" height={80} width={80} />
            </div>
            <nav className="hidden md:block"> {navMenu(active, setActive)}</nav>
          </div>
          <div className=" relative ">
            <ul className=" flex items-center gap-5">
              <li className="text-lg lg:text-2xl">
                <CiSearch />
              </li>
              <li className="text-lg lg:text-2xl">
                <CiUser />
              </li>
              <li className="text-lg lg:text-2xl">
                <CiHeart />
              </li>
              <li className="text-lg lg:text-2xl">
                <CiShoppingCart />
              </li>
              <li
                onClick={() => setOpen(!open)}
                className={`transition-transform duration-300 ease-in-out md:hidden block text-lg lg:text-2xl cursor-pointer ${
                  open ? "transform rotate-180" : "transform rotate-0"
                }`}
              >
                {open ? (
                  <>
                    {" "}
                    <TfiClose />
                  </>
                ) : (
                  <>
                    {" "}
                    <CiMenuBurger />
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Responsive Navigation */}

      <div
        className={`md:hidden fixed bg-gray-300 h-screen w-full  transform transition-all duration-700 ease-in-out ${
          open ? "clip-path-circle-full" : "clip-path-circle-small"
        }`}
      >
        <div className=" flex justify-center items-center mt-10">
          <nav>{navMenu(active, setActive)}</nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
