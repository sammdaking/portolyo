import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Samet",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Jr Frontend Developer ",
  summary:
    "I actively pursue personal projects to enhance my skills and explore new technologies. Passionate about building creative and functional side projects to expand my knowledge base. I'm constantly challenging myself with new projects to push my creative and technical boundaries.",
  avatarUrl: "/me.jpg",
  skills: [
    "Html",
    "CSS",
    "SASS",
    "Tailwind",
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "ZUSTAND",
    "REACT-QUERY",
    "Next.js",
    "GIT",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "samet34business@gmail.com",
    tel: "05358311529",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sammdaking",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sametbekisli/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "samet34business@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Lumian Energy",
      href: "https://www.lumian.energy/",
      location: "Remote",
      title: "Frontend Stayjeri",
      logoUrl: "/lumian.png",
      start: "February 2024",
      end: "May 2024",
      description:
        "During my 3.5-month internship, I had the opportunity to work with a complex codebase beyond basic projects. I learned Zustand for state management, React Query for data fetching, Postman for API testing, Sass for styling, and how to write cleaner and more reusable code. ",
    },
  ],
  education: [
    {
      school: "Barbaros Anatolian High School",
      start: "2014",
      end: "2017",
      href: "",
      logoUrl: "",
      degree: "",
    },
    {
      school: "Füsun Yönder Anatolian High School",
      start: "2017",
      end: "2018",
      href: "",
      logoUrl: "",
      degree: "",
    },
    {
      school: "Erciyes Univercity",
      degree: "Agricultur Engineering",
      start: "2018",
      end: "2019",
      href: "",
      logoUrl: "",
    },
    {
      school: "Kastamonu Univercity",
      degree: "Computer Engineering",
      start: "2019",
      end: "2024",
      href: "",
      logoUrl: "",
    },
  ],
  projects: [
    {
      title: "Todo App",
      href: "https://sammdaking-todo.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["React.js", "Sass"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-todo.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/todo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/todoapp.png",
      video: "https://youtu.be/kYydOKLJ8qQ",
    },
    {
      title: "Calculator App",
      href: "https://sammdaking-calculator.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["React.js", "Module Css"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-calculator.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/calculator.png",
      video: "",
    },
    {
      title: "Frontend Mentor Card Component",
      href: "https://sammdaking-card.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-card.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },

        {
          type: "Source",
          href: "https://github.com/sammdaking/FM-card-component",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cardComponent.jpg",
      video: "",
    },
    {
      title: "Frontend Mentor grid subscriber page",
      href: "https://sammdaking-subscription-page.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description: "",
      technologies: ["Html", "Css"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-subscription-page.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/FM-single-price-grid-component-master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/subscriber.jpg",
      video: "",
    },

    {
      title: "Frontend Mentor Recipe Page",
      href: "https://sammdaking-recipe.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-recipe.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/FM-recipe-page-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recipe.jpg",
      video: "",
    },

    {
      title: "Frontend Mentor Result Page",
      href: "https://sammdaking-result-page.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-result-page.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/FM-results-summary-component",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/result.jpg",
      video: "",
    },

    {
      title: "Frontend Mentor Profile Page",
      href: "https://sammdaking-profile-page.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-profile-page.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/FM-social-links-profile-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/profile.jpg",
      video: "",
    },
    {
      title: "Frontend Mentor Stats Preview Page",
      href: "https://sammdaking-stats-profile.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description: "",
      technologies: ["Html", "Css"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-stats-profile.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/FM-stats-preview-card-component",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stats.jpg",
      video: "",
    },
    {
      title: "Frontend Mentor Rating Page",
      href: "https://sammdaking-rating-component.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css", "JS"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-rating-component.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/FM-interactive-rating-component",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rating.jpg",
      video: "",
    },
    {
      title: "Frontend Mentor Github Profile App",
      href: "https://sammdaking-github-proile.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["React.js"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-github-proile.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/github-profile",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/github.png",
      video: "",
    },
    {
      title: "Frontend Mentor Age Calculator",
      href: "https://sammdaking-age-calculator.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css", "Js"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-age-calculator.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/age-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/age.jpg",
      video: "",
    },

    {
      title: "Frontend Mentor Interactive Card",
      href: "https://sammdaking-interactive-card.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css", "Js"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-interactive-card.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/FrontendMentor-interactive-card",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/interactive.jpg",
      video: "",
    },
    {
      title: "Frontend Mentor Interactive Pricing",
      href: "https://sammdaking-interative-pricing.netlify.app/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Html", "Css", "Js"],
      links: [
        {
          type: "Website",
          href: "https://sammdaking-interative-pricing.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sammdaking/interactive-pricing-component-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/interactivePricing.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
