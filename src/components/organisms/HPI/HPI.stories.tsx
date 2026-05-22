import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import HPI from "./HPI";

const meta = {
  title: "Organisms/HPI",
  component: HPI,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    data: {
      table: {
        category: "Grid",
      },
    },
    columns: {
      control: "radio",
      options: ["one", "two"],
      table: {
        category: "Grid",
      },
    },
    theme: {
      control: "radio",
      options: ["list", "card"],
      table: {
        category: "Item",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
} satisfies Meta<typeof HPI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Left",
      },
      {
        title: "Right",
      },
      {
        title: "Both",
      },
    ],
    theme: "card",
    columns: "two",
  },
};
