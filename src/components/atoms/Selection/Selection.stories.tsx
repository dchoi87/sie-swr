import type { Meta, StoryObj } from "@storybook/react-vite";

import Selection from "./Selection";

const meta = {
  title: "Atoms/Selection",
  component: Selection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Selection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  globals: {
    backgrounds: { value: "dark" },
  },
};
