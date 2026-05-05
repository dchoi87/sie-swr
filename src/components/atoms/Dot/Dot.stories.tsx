import type { Meta, StoryObj } from "@storybook/react-vite";

import Dot from "./Dot";

const meta = {
  title: "Atoms/Dot",
  component: Dot,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  globals: {
    backgrounds: { value: "dark" },
  },
};
