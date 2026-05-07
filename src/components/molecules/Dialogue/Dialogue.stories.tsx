import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import Dialogue from "./Dialogue";

const meta = {
  title: "Molecules/Dialogue",
  component: Dialogue,
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "8rem",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dialogue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const Navigation: Story = {
  args: {
    ...Default.args,
    navigation: true,
  },
};

export const Confirmation: Story = {
  args: {
    ...Default.args,
    navigation: true,
    navigationType: "confirm",
  },
};
