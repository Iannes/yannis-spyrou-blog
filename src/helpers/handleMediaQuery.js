export const handleMediaQuery = (mobile = "", desktop = "") =>
  typeof window !== "undefined" && window.innerWidth < 768 ? mobile : desktop;
