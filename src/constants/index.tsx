import docker from "../assets/docker.png";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import WorkIcon from "@mui/icons-material/Work";
import LayersIcon from "@mui/icons-material/Layers";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import type { ReactNode } from "react";
import js from "../assets/js.webp";
import ts from "../assets/ts.png";
import aws from "../assets/aws.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import dynamodb from "../assets/DynamoDB.png";
import mongodb from "../assets/mongodb.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import sql from "../assets/sql.png";
import git from "../assets/git.png";
import express from "../assets/express-js.png";
import csharp from "../assets/csharp.png";
import dotnet from "../assets/dotnet.png";
import jest from "../assets/jest.png";
import bcaLogo from "../assets/bcaLogo.jpg";
import mcaLogo from "../assets/mcaLogo.jpeg";
import zapcomLogo from "../assets/zapcom.png";
import byLogo from "../assets/by.jpg";

type mark = {
  value: number;
  label: string;
};

export type skill = {
  label: string;
  logo: string;
  proficiency: number;
};

export type NavItem = {
  id: string;
  label: string;
  icon: ReactNode;
  scrollId: string;
};

export type SocialMediaLink = {
  link: string;
  icon: ReactNode;
};

export type CareerTimeline = {
  title: string;
  subtitle: string;
  duration: string;
  period: string;
  logo: string;
};

export const INTIAL_NUMBER_OF_SKILLS = 5;

export const navItems: NavItem[] = [
  // {
  //   id: "home",
  //   label: "Home",
  //   icon: <HomeIcon fontSize="small" />,
  //   scrollId: "",
  // },
  {
    id: "about",
    label: "About",
    icon: <FeedIcon fontSize="small" />,
    scrollId: "about",
  },
  {
    id: "skills",
    label: "Skills",
    icon: <LayersIcon fontSize="small" />,
    scrollId: "skills",
  },
  {
    id: "career",
    label: "Career",
    icon: <WorkIcon fontSize="small" />,
    scrollId: "career",
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    link: "https://github.com/Dhanraj-Pai-Raiturkar",
    icon: <GitHubIcon />,
  },
  {
    link: "https://in.linkedin.com/in/dhanraj-pai-raiturkar-557282184?trk=people_directory",
    icon: <LinkedInIcon />,
  },
  {
    link: "https://www.instagram.com/dhanraj_pai_raiturkar/?hl=en",
    icon: <InstagramIcon />,
  },
];

export const marks: mark[] = [
  {
    value: 0,
    label: "Learner",
  },
  {
    value: 50,
    label: "Practioner",
  },
  {
    value: 100,
    label: "Expert",
  },
];

export const skills: skill[] = [
  {
    label: "Javascript",
    logo: js,
    proficiency: 90,
  },
  {
    label: "Typescript",
    logo: ts,
    proficiency: 80,
  },
  {
    label: "ReactJs",
    logo: react,
    proficiency: 85,
  },
  {
    label: "NodeJs",
    logo: node,
    proficiency: 74,
  },
  {
    label: "ExpressJs",
    logo: express,
    proficiency: 82,
  },
  {
    label: "Jest",
    logo: jest,
    proficiency: 70,
  },
  {
    label: "Python",
    logo: python,
    proficiency: 40,
  },
  {
    label: "Java",
    logo: java,
    proficiency: 60,
  },
  {
    label: "SQL",
    logo: sql,
    proficiency: 51,
  },
  {
    label: "MongoDB",
    logo: mongodb,
    proficiency: 64,
  },
  {
    label: "DynamoDB",
    logo: dynamodb,
    proficiency: 67,
  },
  {
    label: "Git",
    logo: git,
    proficiency: 79,
  },
  {
    label: "AWS",
    logo: aws,
    proficiency: 68,
  },
  {
    label: "Docker",
    logo: docker,
    proficiency: 50,
  },
  {
    label: "C#",
    logo: csharp,
    proficiency: 25,
  },
  {
    label: ".NET",
    logo: dotnet,
    proficiency: 44,
  },
];

export const careerTimeline: CareerTimeline[] = [
  {
    title: "Graduation",
    subtitle: "Bachelor of Computer Applications",
    duration: "Jun 2016 - Jun 2019",
    period: "3 years",
    logo: bcaLogo,
  },
  {
    title: "Post Graduation",
    subtitle: "Master of Computer Applications",
    duration: "Jun 2019 - Jul 2022",
    period: "3 years 1 month",
    logo: mcaLogo,
  },
  {
    title: "ZapCom Group Inc",
    subtitle: "Internship",
    duration: "Jan 2022 - Jul 2022",
    period: "6 months",
    logo: zapcomLogo,
  },
  {
    title: "ZapCom Group Inc",
    subtitle: "Associate Software Engineer",
    duration: "Jul 2022 - Oct 2024",
    period: "2 years 4 months",
    logo: zapcomLogo,
  },
  {
    title: "BlueYonder (Panasonic)",
    subtitle: "Software Engineer II",
    duration: "Oct 2024 - Present",
    period: "Current",
    logo: byLogo,
  },
];
