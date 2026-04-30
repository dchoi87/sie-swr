import type { Meta, StoryObj } from "@storybook/react-vite";
import * as icons from "react-bootstrap-icons";

import Icon from "./Icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: "select",
      options: Object.keys(icons),
    },
    size: {
      control: "select",
      options: [12, 24, 48, 64],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: "DatabaseUp",
    size: 64,
  },
};
