import type { Meta, StoryObj } from "@storybook/react-vite";

import Header from "./Header";

const meta = {
  title: "Molecules/Header",
  component: Header,
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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const Centered: Story = {
  args: {
    alignment: "center",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
