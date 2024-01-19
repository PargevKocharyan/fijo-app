import Footer from "@/components/general/footer";
import Header from "@/components/general/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

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

function Page() {
  return (
    <>
      <Header />
      <section
        aria-label="Hero Section"
        className="py-16 font-semibold text-center bg-white"
      >
        <h1 className="text-5xl ">
          Contact <span className="text-accent">Us</span>
        </h1>
        <p className="max-w-lg mx-auto mt-10 font-lg">
          Feel free to send us an inquiry or schedule a meeting to chat about
          your hiring needs{" "}
        </p>
      </section>
      <section
        aria-label="Contact information"
        className="container flex gap-5 mx-auto mt-24"
      >
        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0545601702756!2d-122.40195852356807!3d37.78876111135336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062c3040f0b%3A0xa37dc048962489c3!2sJPMorgan%20Chase%20Building%2C%20560%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20%D0%A1%D0%A8%D0%90!5e0!3m2!1sru!2s!4v1705671997215!5m2!1sru!2s"
          loading="lazy"
          className="w-full rounded-lg h-[600px]"
        ></iframe>
        <div className="flex flex-col gap-5">
          <div className="w-full p-5 text-lg bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <div className="flex gap-3 mt-5">
              <Image
                width={30}
                height={30}
                src="https://s3.amazonaws.com/appforest_uf/f1646056404118x273480872376022900/Location.svg"
                alt="Loaction"
              />
              <a
                target="_blank"
                href="https://maps.app.goo.gl/6BaUmWdzCiva1W988"
              >
                560 Mission St, San Francisco, CA 94105, United States
              </a>
            </div>
            <div className="flex gap-3 mt-5">
              <Image
                width={30}
                height={30}
                src="https://s3.amazonaws.com/appforest_uf/f1646056542502x229254031738179720/phone.svg"
                alt="Loaction"
              />
              <a target="_blank" href="callto:+12098252862">
                +1 209-825-2862
              </a>
            </div>
            <div className="flex gap-5 mt-5">
              {socialMedia.map((item, index) => (
                <a target="_blank" href={item.link} key={index}>
                  <Image
                    src={item.icon}
                    alt="social media"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 w-full p-5 text-lg bg-white rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Send a message</h3>
              <p>
                Share your thoughts or inquires with us, we'll be happy to
                assist with anything in mind. We reply within 24 hours.
              </p>
            </div>

            <form className="flex flex-col" action="">
              <Input variant="underline" type="email" placeholder="Email" />
              <Input variant="underline" type="text" placeholder="Name" />
              <Textarea
                className="resize-none"
                variant="underline"
                placeholder="Message"
              />
              <Button className="self-end mt-4">Send</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer color="white" />
    </>
  );
}

export default Page;
