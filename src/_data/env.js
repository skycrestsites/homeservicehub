// Production builds hide sample content (stories, team) that is only there to preview the layout.
export default {
  production: process.env.ELEVENTY_ENV === "production",
  buildTime: new Date(),
  year: new Date().getFullYear(),
};
