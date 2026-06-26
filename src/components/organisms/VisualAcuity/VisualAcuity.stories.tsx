import type { Meta, StoryObj } from "@storybook/react-vite";

import VisualAcuity from "./VisualAcuity";

const meta = {
  title: "Organisms/Visual Acuity",
  component: VisualAcuity,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof VisualAcuity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
