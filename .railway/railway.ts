import { defineRailway, github, project, service } from "railway/iac";

export default defineRailway(() => {
  const web = service("web", {
    source: github("coffee-cup/solis-website", { branch: "master" }),
    build: "bun run build",
    healthcheck: "/",
    env: {
      RAILPACK_SPA_OUTPUT_DIR: "dist",
    },
  });

  return project("solis-website", {
    resources: [web],
  });
});
