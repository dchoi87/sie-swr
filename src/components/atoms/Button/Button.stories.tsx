import type { Meta, StoryObj } from "@storybook/react-vite";
import * as icons from "react-bootstrap-icons";

import Button, { BUTTON_TYPES } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: "select",
      options: Object.keys(icons),
    },
    type: {
      control: "select",
      options: BUTTON_TYPES,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Lorem Ipsum",
    iconName: "ArrowRight",
    iconPos: "end",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: "secondary",
  },
};

export const Contrast: Story = {
  args: {
    ...Primary.args,
    type: "contrast",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const Icon: Story = {
  args: {
    type: "primary",
    iconName: "ChevronRight",
  },
};
