import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import TopicalMedication from "./TopicalMedication";

const meta = {
  title: "Organisms/Topical Medication",
  component: TopicalMedication,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
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
} satisfies Meta<typeof TopicalMedication>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Latanoprost 0.005%",
        subtext: "Glaucoma / High Eye Pressure",
        type: "eyedrop",
      },
      {
        title: "Timolol 0.25%",
        subtext: "Glaucoma",
        type: "eyedrop",
      },
      {
        title: "Prednisolone Acetate 1%",
        subtext: "Eye Inflammation",
        type: "eyedrop",
      },
    ],
  },
};
