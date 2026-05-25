import type { Meta, StoryObj } from "@storybook/react-vite";

import Error from "./Error";

const meta = {
  title: "Molecules/Error",
  component: Error,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "600px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Something Went Wrong",
    subtext:
      "We encountered an unexpected issue while loading this module. Please ask your technician for assistance.",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
