import type { Meta, StoryObj } from "@storybook/react-vite";

import SelectionsGrid from "./SelectionsGrid";

const meta = {
  title: "Molecules/Selections Grid",
  component: SelectionsGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof SelectionsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
