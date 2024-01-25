"use client";
import EmployerMenuMobile from "@/components/routes/dashboard/employer/employer-menu-mobile";
import EmployerBeneficies from "@/components/routes/dashboard/employer/info/employer-beneficies";
import EmployerCompanyAbout from "@/components/routes/dashboard/employer/info/employer-company-about";
import EmployerInfoHaedar from "@/components/routes/dashboard/employer/info/employer-info-haedar";

function Page() {
  return (
    <section className="w-full mx-auto mt-10 px-80">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Company info</h2>
        <EmployerMenuMobile />
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <EmployerInfoHaedar />
        <div className="grid-cols-3 gap-5 gird">
          {/* Company about */}
          <div className="flex flex-col col-span-2 gap-5">
            <EmployerCompanyAbout />
            <EmployerBeneficies />
          </div>
          <div className="flex flex-col gap-5">
            <EmployerCompanyAbout />
            <EmployerBeneficies />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
