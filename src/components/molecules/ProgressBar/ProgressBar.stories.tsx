import type { Meta, StoryObj } from "@storybook/react-vite";

import ProgressBar from "./ProgressBar";

const meta = {
  title: "Molecules/Progress Bar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    currentStep: { control: { type: "range", min: 0, max: 6, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  globals: {
    backgrounds: { value: "dark" },
  },
};
