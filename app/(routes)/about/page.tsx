import Footer from "@/components/general/footer";
import Header from "@/components/general/header";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <>
      <Header />
      <section
        aria-label="Hero Section"
        className="py-16 font-semibold text-center bg-white"
      >
        <h1 className="text-5xl ">
          About <span className="text-accent">FIJO</span>
        </h1>
        <p className="max-w-lg mx-auto mt-10 font-lg">
          FIJO helps top talent find roles in the in all world
        </p>
      </section>
      <section className="container flex gap-5 mx-auto mt-28">
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white rounded-2xl">
          <Image
            src="https://s3.amazonaws.com/appforest_uf/f1643637035914x499688445462786800/Vector%20%286%29.svg"
            alt="Fijo"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full p-5 space-y-8 text-lg bg-white rounded-lg ">
          <h3 className="text-2xl font-semibold">Contact Info</h3>
          <p>
            Proin hendrerit auctor eros ut scelerisque. Duis vel viverra neque,
            et feugiat est. Praesent sagittis malesuada lorem, eu pretium lacus
            pellentesque non. Integer pellentesque ipsum vitae quam aliquet, a
            facilisis turpis pellentesque. Duis mauris arcu, suscipit ac commodo
            eu, gravida vitae odio. Nulla at aliquet ligula. Aliquam erat
            volutpat. Aenean id egestas nisi, sit amet viverra enim. Phasellus
            sit amet eleifend turpis. In rhoncus diam ante. In consequat leo ac
            dolor posuere, at facilisis erat varius. Sed pulvinar odio at erat
            lobortis, in vestibulum neque mattis.
          </p>
          <p>
            Curabitur mattis vitae leo vel efficitur. Vestibulum sed ante
            luctus, aliquet leo et, lobortis nibh. Suspendisse vitae est nisi.
            Morbi commodo eu nunc nec convallis. Praesent ipsum ligula, feugiat
            quis eros sed, euismod dignissim ligula. Vivamus vitae orci eu magna
            porta porttitor nec id purus. Suspendisse eu dolor quis mauris
            viverra suscipit vel in ligula. Vestibulum euismod diam ipsum,
            mollis convallis lectus vulputate at. Nulla facilisi. Integer tellus
            felis, porttitor vitae ipsum eu, convallis porttitor tellus. Etiam
            pellentesque magna in est aliquam mollis.
          </p>
          <p>
            Praesent non feugiat nisl, eu viverra metus. Quisque gravida
            vehicula sapien id gravida. Integer pharetra dui ut finibus dapibus.
            Suspendisse mattis mollis fermentum. Aenean vulputate id ipsum at
            varius. Nulla consectetur vestibulum lacus, dapibus convallis orci
            blandit vitae. Quisque leo mi, maximus non quam in, semper dictum
            eros. Nulla congue eros quis dui sagittis, sit amet mattis magna
            suscipit. Integer laoreet elit ac erat imperdiet, ut euismod lacus
            facilisis. Sed venenatis leo et neque feugiat fermentum. Nulla
            facilisi. Sed vehicula elit ac diam consequat, a molestie magna
            scelerisque.
          </p>
        </div>
      </section>
      <Footer color="white" />
    </>
  );
}

export default Page;
