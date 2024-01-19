import React from "react";

const FeaturedJobs = () => {
  return (
    <section aria-label="Featured Jobs" className="pt-32 bg-white">
      <div className="container flex flex-col items-center gap-5 mx-auto text-center">
        <h2 className="text-5xl font-bold">Featured Job Posting</h2>
        <p className="max-w-sm text-foreground">Find your dream job</p>
      </div>
    </section>
  );
};

export default FeaturedJobs;
