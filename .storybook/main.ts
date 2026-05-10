import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["storybook-addon-tag-badges"],
  framework: "@storybook/react-vite",
  viteFinal: async (config) =>
    mergeConfig(config, {
      build: { cssMinify: "esbuild" },
    }),
};
export default config;
