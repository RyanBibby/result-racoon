import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/daisy-home.tsx"),
  route("results/:runnumber", "routes/result.tsx"),
  route("results-process", "routes/result-process.tsx"),
] satisfies RouteConfig;
