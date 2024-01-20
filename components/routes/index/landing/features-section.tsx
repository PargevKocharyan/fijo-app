import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      icon: "https://s3.amazonaws.com/appforest_uf/f1647362597564x341024825037880450/Stock.svg",
      title: "Career Development",
      description:
        "Setting goals can help you gain both short- and long-term achievements. You can set professional  career.",
    },
    {
      icon: "https://s3.amazonaws.com/appforest_uf/f1647362635248x233035088945658720/sales.svg",
      title: "Starting a New Job",
      description:
        "Your first day at work may be exciting. Here are tips to make your first day at work more successful.",
    },
    {
      icon: "https://s3.amazonaws.com/appforest_uf/f1647362569971x816783468441606400/Money.svg",
      title: "Pay & Salary",
      description:
        "Tips for a making a great impression during your internship, including advice on being prepared, following through.",
    },
    {
      icon: "https://s3.amazonaws.com/appforest_uf/f1647362384158x349616107333284860/resume.svg",
      title: "Finding a Job",
      description:
        "A checklist with how-to for each stage of the job search: how to apply, resume tips, interview advice and more.",
    },
    {
      icon: "https://s3.amazonaws.com/appforest_uf/f1647362384158x349616107333284860/resume.svg",
      title: "Interviewing",
      description: "Learn about some common heapsort interview questions.",
    },
    {
      icon: "https://s3.amazonaws.com/appforest_uf/f1647362438030x201909529336614200/company_type.svg",
      title: "Resumes & Cover Letters",
      description:
        "Learn how to write an effective personal statement for graduate school with these tips and examples.",
    },
  ];

  return (
    <section aria-label="Features" className="pt-32 bg-white">
      <div className="container flex flex-col items-center gap-5 mx-auto text-center">
        <h2 className="text-5xl font-bold">How can FIJO help you?</h2>
        <p className="max-w-sm text-foreground">
          Phasellus eleifend in purus sed molestie. Sed elementum blandit
          porttitor.
        </p>
      </div>
      <div className="container flex flex-wrap items-center justify-center gap-5 mx-auto mt-16">
        {features.map((feature) => (
          // Display a feature card
          <div
            key={feature.title}
            className="px-5 py-6 bg-white rounded-3xl shadow-lg min-w-[280px] max-w-[380px] flex flex-col items-center gap-5 text-center hover:bg-[#004BBB] hover:bg-opacity-5 transition-colors ease-in-out duration-300"
          >
            <Image
              alt={feature.title}
              src={feature.icon}
              width={45}
              height={45}
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className=" text-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
