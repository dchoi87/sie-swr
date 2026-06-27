import type { Meta, StoryObj } from "@storybook/react-vite";

import VisualField from "./VisualField";

const meta = {
  title: "Organisms/Visual Field",
  component: VisualField,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof VisualField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
