import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import OralMedication from "./OralMedication";

const meta = {
  title: "Organisms/Oral Medication",
  component: OralMedication,
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
} satisfies Meta<typeof OralMedication>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Acetazolamide 250mg",
        subtext: "Glaucoma / Eye Pressure",
        type: "oral",
      },
      {
        title: "Prednisone 5mg",
        subtext: "Eye Inflammation",
        type: "oral",
      },
      {
        title: "Montelukast 10mg",
        subtext: "Allergy Symptoms",
        type: "oral",
      },
      {
        title: "Doxycycline 50mg",
        subtext: "Blepharitis, rosacea-related eye disease",
        type: "oral",
      },
    ],
  },
};
