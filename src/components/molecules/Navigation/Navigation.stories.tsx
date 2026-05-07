import type { Meta, StoryObj } from "@storybook/react-vite";

import Navigation, { NAVIGATION_TYPES } from "./Navigation";

const meta = {
  title: "Molecules/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: NAVIGATION_TYPES,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          height: "150px",
          outline: "2px solid rgba(60, 60, 60, 0.45)",
          outlineOffset: "5px",
          borderRadius: "16px",
          position: "relative",
          background: "rgba(60, 60, 60, 0.45)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dots: 5,
    type: "chevron",
  },
};

export const ConfirmationIcon: Story = {
  args: {
    ...Default.args,
    type: "confirm",
  },
};

export const ConfirmationText: Story = {
  args: {
    ...Default.args,
    type: "text",
  },
};
