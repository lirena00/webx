
import { HeroParallax } from "./ui/hero-parallax";

const products = [
  {
    title: "Top Rated Developers",
    link: "#",
    thumbnail: "/1.jpeg"
  },
  {
    title: "AI Enthusiasts",
    link: "#",
    thumbnail: "/2.jpeg"
  },
  {
    title: "Software Architects",
    link: "#",
    thumbnail: "/3.jpeg"
  },
  {
    title: "UX Designers",
    link: "#",
    thumbnail: "/4.jpeg"
  },
  {
    title: "DevOps Engineers",
    link: "#",
    thumbnail: "/5.jpeg"
  },
  {
    title: "Full Stack Developers",
    link: "#",
    thumbnail: "/6.jpeg"
  },
  {
    title: "Mobile App Developers",
    link: "#",
    thumbnail: "/7.jpeg"
  },
  {
    title: "Data Scientists",
    link: "#",
    thumbnail: "/8.jpeg"
  },
  {
    title: "Cloud Experts",
    link: "#",
    thumbnail: "/9.jpeg"
  },
  {
    title: "Security Specialists",
    link: "#",
    thumbnail: "/10.jpeg"
  }
];

const CustomHeroParallax = () => {
  return <HeroParallax products={products} />;
};

export default CustomHeroParallax;
