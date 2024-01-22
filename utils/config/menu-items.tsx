import {
  BadgeInfoIcon,
  BriefcaseIcon,
  GripIcon,
  SlidersIcon,
  StarIcon,
} from "lucide-react";

export const menuItemsEmployer = [
  {
    icon: <GripIcon size={24} />,
    label: "Overview",
    link: "/dashboard/employer",
  },
  {
    icon: <BadgeInfoIcon size={24} />,
    label: "Company Info",
    link: "/dashboard/employer/info",
  },
  {
    icon: <BriefcaseIcon size={24} />,
    label: "Company Jobs",
    link: "/dashboard/employer/jobs",
  },
  {
    icon: <StarIcon size={24} />,
    label: "Saved Resumes",
    link: "/dashboard/employer/resumes",
  },
  {
    icon: <SlidersIcon size={24} />,
    label: "Settings",
    link: "/dashboard/employer/settings",
  },
];

export const menuItemsCandidate = [
  {
    icon: <GripIcon size={24} />,
    label: "Overview",
    link: "/dashboard/candidate",
  },
  {
    icon: <BadgeInfoIcon size={24} />,
    label: "My applications",
    link: "/dashboard/candidate",
  },
  {
    icon: <BriefcaseIcon size={24} />,
    label: "Saved Jobs",
    link: "/dashboard/candidate",
  },
  {
    icon: <SlidersIcon size={24} />,
    label: "Settings",
    link: "/dashboard/candidate",
  },
];
