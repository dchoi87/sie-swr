import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import Calibration from "./Calibration";

const meta = {
  title: "Organisms/Calibration",
  component: Calibration,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={
          {
            // padding: "8rem",
            // backgroundImage: `url(${image})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
          }
        }
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Calibration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
