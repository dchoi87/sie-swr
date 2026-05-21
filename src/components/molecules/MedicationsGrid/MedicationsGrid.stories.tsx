import type { Meta, StoryObj } from "@storybook/react-vite";

import MedicationsGrid from "./MedicationsGrid";

const meta = {
  title: "Molecules/Medications Grid",
  component: MedicationsGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof MedicationsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  globals: {
    backgrounds: { value: "dark" },
  },
};
