import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Lorem Ipsum",
    iconName: "ArrowRight",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: "secondary",
  },
};
