import type { Meta, StoryObj } from "@storybook/react-vite";

import Pupillometry from "./Pupillometry";

const meta = {
  title: "Organisms/Pupillometry",
  component: Pupillometry,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Pupillometry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
