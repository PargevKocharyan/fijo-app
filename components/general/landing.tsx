import React from "react";
import Header from "./header";
import HeroSection from "../routes/index/landing/hero-section";
import CompaniesSection from "../routes/index/landing/companies-section";
import FeaturesSection from "../routes/index/landing/features-section";
import AchievementsSection from "../routes/index/landing/achievements-section";
import FeaturedJobs from "../routes/index/landing/featured-jobs";
import Footer from "./footer";

function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompaniesSection />
      <FeaturesSection />
      <AchievementsSection />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}

export default Landing;
