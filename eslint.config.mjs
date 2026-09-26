import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(["**/.next/**", "**/node_modules/**", "**/.npm-cache/**", "out/**", "build/**", "next-env.d.ts", "Zero-One-Website/**"]),
]);

export default eslintConfig;
