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
  args: {
    title: "Lorem Ipsum Dolor Sit",
    subtext:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    alignment: "center",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
