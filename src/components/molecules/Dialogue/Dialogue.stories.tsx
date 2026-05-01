import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import Dialogue from "./Dialogue";

const meta = {
  title: "Molecules/Dialogue",
  component: Dialogue,
  tags: ["autodocs"],
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

export const Contrast: Story = {
  args: {
    ...Default.args,
    contrast: true,
  },
};

export const Navigation: Story = {
  args: {
    ...Contrast.args,
    contrast: true,
    navigation: true,
  },
};

export const Confirmation: Story = {
  args: {
    ...Contrast.args,
    contrast: true,
    navigation: true,
    navigationType: "confirm",
  },
};
