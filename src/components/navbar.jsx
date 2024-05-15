"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "./navLinks";
const { usePathname } = require("next/navigation");
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const buttonVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",

    },
    opened: {
      transition:{
        when: "beforeChildren",
        staggerChildren: 0.2

      },
      x: 0,
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0

    },
    opened: {
      x: 0,
      opacity: 1

    }
  }
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ">
      {/* LINKS */}
      <div className=" hidden md:flex gap-4 text-2xl  w-1/3">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>
      {/*Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href={"/"}
          className="text-xl  bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">JopeGaro </span>
          <span className="w-12 h-8  rounded bg-white font-bold  flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className=" hidden md:flex gap-4 w-1/3 ">
        <Link href="https://github.com/J0p3Gar099">
          <Image src="/github.png" width={26} height={26} />
        </Link>
        <Link href="https://github.com/J0p3Gar099">
          <Image src="/facebook.png" width={26} height={26} />
        </Link>
        <Link href="https://github.com/J0p3Gar099">
          <Image src="/instagram.png" width={26} height={26} />
        </Link>
        <Link href="https://github.com/J0p3Gar099">
          <Image src="/linkedin.png" width={26} height={26} />
        </Link>
      </div>
      {/* Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded   origin-left "
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={buttonVariants}
            className="w-10 h-1 bg-black rounded origin-left "
          ></motion.div>
        </button>
      </div>
      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className=" absolute top-0 left-0  w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40"
        >
          {links.map((link) => (
            <motion.div variants={listItemVariants}  className="" key={link.title}>
              <Link
                href={link.url}onClick={() => setOpen((prev) => !prev)}
                className={`${pathName === link.url && "bg-white  text-black"}`}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
