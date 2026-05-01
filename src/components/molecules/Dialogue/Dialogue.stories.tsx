import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import Dialogue from "./Dialogue";
import { Button } from "@/components/atoms";

const meta = {
  title: "Molecules/Dialogue",
  component: Dialogue,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    navPos: {
      control: "select",
      options: ["inner", "outer"],
    },
  },
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

export const Cta: Story = {
  args: {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dots: 5,
  },
};

export const Chevrons: Story = {
  args: {
    ...Cta.args,
    navContent: (
      <>
        <Button iconName="ChevronLeft" />
        <Button iconName="ChevronRight" />
      </>
    ),
  },
};

export const Confirmation: Story = {
  args: {
    ...Cta.args,
    navContent: (
      <>
        <Button iconName="XLg" style={{ background: "rgba(108, 1, 5, 0.8)" }} />
        <Button
          iconName="CheckLg"
          style={{ background: "rgba(6, 127, 38, 0.8)" }}
        />
      </>
    ),
  },
};
