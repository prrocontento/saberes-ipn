export type SiteConfig = typeof siteConfig;

const menuLinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Saberes",
    href: "/saberes",
  },
  {
    label: "Recetario",
    href: "/recetario",
  },
  {
    label: "Mercado",
    href: "/mercado",
  },
];

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  
  navItems: menuLinks,
  navMenuItems: menuLinks,
  links: {
    github: "https://github.com/prrocontento/saberes-ipn",
  },
};