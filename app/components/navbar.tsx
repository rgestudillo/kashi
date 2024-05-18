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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/experiences">Experiences</a>
            </li>
          </ul>
        </div>

        <a href="/">
          <EncryptButton />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/experiences">Experiences</a>
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

export default Navbar;
