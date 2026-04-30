import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Directory containing this config file — avoids Turbopack picking ~/package-lock.json as the repo root. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
