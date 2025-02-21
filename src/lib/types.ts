export type Project = {
  url: string;
  title: string;
  icon: string;
  technologies: string[];
};

export enum Technology {
  angular = "Angular.js",
  astro = "Astro.js",
  svelte = "Svelte.js",
  tailwind = "Tailwindcss",
  ts = "TS",
  wordpress = "Wordpress",
  divi = "Divi",
  elementor = "Elementor",
  breakdance = "Breakdance",
}