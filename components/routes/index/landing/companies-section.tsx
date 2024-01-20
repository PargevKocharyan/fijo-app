import Image from "next/image";

const CompaniesSection = () => {
  const companies = [
    {
      name: "Microsoft",
      logo: "/img/landing-page/microsoft.svg",
    },
    {
      name: "Facebook",
      logo: "/img/landing-page/facebook.svg",
    },
    {
      name: "Tesla",
      logo: "/img/landing-page/tesla.svg",
    },
    {
      name: "Amazon",
      logo: "/img/landing-page/amazon.svg",
    },
    {
      name: "Walmart",
      logo: "/img/landing-page/walmart.svg",
    },
  ];

  return (
    <section id="companies" aria-label="Companies" className="bg-white">
      <div className="container flex flex-wrap justify-around pt-20 mx-auto">
        {companies.map((company) => (
          <Image
            key={company.name}
            alt={company.name}
            src={company.logo}
            width={180}
            height={110}
          />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
