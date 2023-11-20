import React from "react";
import Button from "@/components/ui/button";
import logo from "./assets/Logo.svg"
function Header() {
    return (
      <div className="w-full max-w-5xl p-8 flex justify-between items-center font-normal text-sm mx-auto fixed left-1/2 md:translate-x-[-50%]">
          <img alt="logo" src={logo.src} className="w-7 h-7 cursor-pointer"/>
          <div className="flex justify-center items-center gap-7">
              <div className="cursor-pointer">Jobs</div>
              <div className="cursor-pointer">Companies</div>
              <div className="cursor-pointer">About</div>
              <div className="cursor-pointer">Contact Us</div>
          </div>
          <div className="flex justify-center items-center gap-5">
              <div className="cursor-pointer">Sign up / Log in</div>
              <Button variant="black" text="Post a job"/>
          </div>
      </div>
      )
}

export default Header;
