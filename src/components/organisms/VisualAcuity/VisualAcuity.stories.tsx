import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/va-room.png";

import VisualAcuity from "./VisualAcuity";

const meta = {
  title: "Organisms/Visual Acuity",
  component: VisualAcuity,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["isolated", "snellen"],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof VisualAcuity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Isolated: Story = {
  args: {
    type: "isolated",
  },
};

export const Snellen: Story = {
  args: {
    type: "snellen",
  },
};
