import Image from "next/image";
import Link from "next/link";
import React from "react";

const thisYear = new Date().getFullYear();

const socialMedia = [
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1644944526314x572618619666559700/Icons%20%285%29.svg",
    link: "/",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1644944535108x747807687634596100/Icons.svg",
    link: "/",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1644944543274x667028934261205900/Icons%20%281%29.svg",
    link: "/",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1644944557494x205793992262050660/Icons%20%282%29.svg",
    link: "/",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1644944570158x282448651236303580/Icons%20%283%29.svg",
    link: "/",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1644944579657x238538476855034720/Icons%20%284%29.svg",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="py-10 mt-10 font-sans">
      <div className="container flex justify-between mx-auto">
        {/* Contact info */}
        <div className="flex flex-col gap-5">
          <Image
            src="/img/logo.svg"
            alt="logo"
            width={28}
            height={26}
            className="cursor-pointer"
          />
          <p>560 Mission St, San Francisco, CA 94105, United States</p>
          <p>+1 209-825-2862</p>
          <p className="font-semibold font-sm">
            © All Rights Reserved — FIJO {thisYear}
          </p>
        </div>

        {/* Social media + links */}
        <div className="flex flex-col gap-5 font-semibold text-right">
          <Link href="/">FAQ</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
          <div className="flex gap-5">
            {socialMedia.map((item, index) => (
              <Link href={item.link} key={index}>
                <Image
                  src={item.icon}
                  alt="social media"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
