"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MailCheck,
  Mail,
  Send,
} from "lucide-react";
import { EncryptButton } from "../ui/home-button";
const Navbar = () => {
  return (
    <div className="navbar bg-transparent text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-blue-950 text-white"
          >
            <li>
              <a href="/projects">Project</a>
            </li>
            <li>
              <a href="/experiences">Experiences</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <EncryptButton />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu-horizontal px-1 gap-3">
          <li>
            <a href="/projects">
              <DrawOutlineButton>Projects</DrawOutlineButton>
            </a>
          </li>
          <li>
            <a href="/experiences">
              <DrawOutlineButton>Experiences</DrawOutlineButton>
            </a>
          </li>
          <li>
            <a href="/blog">
              <DrawOutlineButton>Blogs</DrawOutlineButton>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="flex space-x-4">
          <li className="social_icon">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/kashi-estudillo/"
            >
              <Linkedin />
            </Link>
          </li>
          <li className="social_icon">
            <Link target="_blank" href="https://github.com/rgestudillo">
              <Github />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DrawOutlineButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-blue-950"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-950 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-950 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-950 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-950 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Navbar;
