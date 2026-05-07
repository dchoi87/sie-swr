import type { Meta, StoryObj } from "@storybook/react-vite";
import * as icons from "react-bootstrap-icons";

import Button from "./Button";

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
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Lorem Ipsum",
    iconName: "ArrowRight",
    iconPos: "end",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const Chevron: Story = {
  args: {
    iconName: "ChevronRight",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const Yes: Story = {
  args: {
    iconName: "CheckLg",
    theme: "green",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const No: Story = {
  args: {
    iconName: "XLg",
    theme: "red",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
