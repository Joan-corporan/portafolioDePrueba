import Link from "next/link";
import React from "react";
import {
  DribbbleIcon,
  GitHubIcon,
  LinkedInIcon,
  PinterestIcon,
  XIcon,
} from "./Icons";

export const Navbar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav >
          <Link className="mx-2" href="/">Home</Link>
          <Link className="mx-2" href="/about">About</Link>
          <Link className="mx-2" href="/projects">Projects</Link>
        </nav>
        <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full">
            VB

        </div>
        <nav className="flex items-center justify-center flex-grap gap-2">
          <a target={'_blank'} href="https://x.com">
            <XIcon />
          </a>
          <a target={'_blank'} href="https://github.com">
            <GitHubIcon />
          </a>
          <a target={'_blank'} href="https://linkedin.com">
            <LinkedInIcon />
          </a>
          <a target={'_blank'} href="https://pinteres.com">
            <PinterestIcon />
          </a>
          <a target={'_blank'} href="https://dribbble.com">
            <DribbbleIcon />
          </a>
        </nav>
      </header>
    </>
  );
};
