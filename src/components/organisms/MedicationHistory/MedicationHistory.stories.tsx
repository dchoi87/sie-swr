import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import MedicationHistory from "./MedicationHistory";

const meta = {
  title: "Organisms/Medication History",
  component: MedicationHistory,
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
} satisfies Meta<typeof MedicationHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
