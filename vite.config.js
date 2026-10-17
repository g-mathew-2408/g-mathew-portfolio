import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites need "/repository-name/" here.
  // The deployment steps below explain when to change this.
  base: "/g-mathew-portfolio/",
});