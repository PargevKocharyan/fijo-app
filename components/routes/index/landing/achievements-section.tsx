import React from "react";

const achievements = [
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1647362755789x229065159096356830/finance.svg",
    count: 16,
    label: "Posted Jobs",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1647362731218x464809639970900100/Institute.svg",
    count: 6,
    label: "Companies Registed",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1647362840922x604243056088753300/contact.svg",
    count: 23,
    label: "Applications per Day",
  },
  {
    icon: "https://s3.amazonaws.com/appforest_uf/f1645115747027x734772072152365400/website%20%281%29.svg",
    count: 8,
    label: "Resumes Completed",
  },
];

const AchievementsSection = () => {
  return (
    <section aria-label="Achievements" className="pt-24 bg-white">
      <div className="container flex flex-wrap justify-around mx-auto bg-background rounded-2xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 text-center"
          >
            <img
              src={achievement.icon}
              alt={achievement.label}
              className="w-16 h-16"
            />
            <h3 className="mt-2 text-3xl font-bold">{achievement.count}+</h3>
            <p className="text-lg font-semibold">{achievement.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
