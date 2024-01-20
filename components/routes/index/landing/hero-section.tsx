import RegisterDialog from "@/components/auth/register-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="pt-10 bg-gradient-to-t from-background to-white"
      aria-label="Hero Section"
    >
      <div className="container flex flex-col items-center justify-between gap-0 mx-auto mt-20 text-center lg:text-left lg:gap-10 lg:flex-row">
        {/* Text block */}
        <div className="flex flex-col items-center max-w-sm gap-5 lg:justify-center lg:items-start">
          <h1 className="text-5xl font-semibold">
            A curated job board for <span className="text-accent">hire</span>{" "}
            and <span className="text-accent">land</span> your first job
          </h1>
          <p>
            Phasellus eleifend in purus sed molestie. Sed elementum blandit
            porttitor.
          </p>
          <RegisterDialog>
            <Button className="w-fit">Get Started</Button>
          </RegisterDialog>
        </div>
        {/* Image */}
        <Image
          alt="World Map"
          src="\img\landing-page\world-map.svg"
          width={680}
          height={311}
        />
      </div>
      <div className="w-[220px] h-[110px] relative mx-auto">
        <Image
          alt="Subtract"
          src="\img\landing-page\Subtract.svg"
          width={220}
          height={110}
        />
        {/* Arrow */}
        <a href="#companies">
          <Image
            className="absolute left-0 right-0 mx-auto bottom-4"
            alt="arrow-down"
            src="\img\landing-page\arrow-down.svg"
            width={24}
            height={24}
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
