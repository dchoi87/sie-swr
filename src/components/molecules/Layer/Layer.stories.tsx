import type { Meta, StoryObj } from "@storybook/react-vite";

import Layer from "./Layer";

const meta = {
  title: "Molecules/Layer",
  component: Layer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "10rem",
          background:
            "linear-gradient(190deg,rgba(33, 89, 181, 1) 0%, rgba(49, 56, 92, 1) 40%, rgba(0, 0, 0, 1) 100%)",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Layer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Welcome",
  },
};
