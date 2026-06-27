import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import PatientHistory from "./PatientHistory";

const meta = {
  title: "Organisms/Patient History",
  component: PatientHistory,
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
} satisfies Meta<typeof PatientHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Medications: Story = {
  args: { startIndex: 0, endIndex: 1 },
};

export const ChiefComplaint: Story = {
  args: {
    startIndex: 2,
    endIndex: 2,
  },
};

export const HPI: Story = {
  args: {
    startIndex: 3,
    endIndex: 6,
  },
};
