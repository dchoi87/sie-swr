import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import { Toast } from "@/components/molecules";

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
        <Toast
          title="Your Waiting Room is Ready!"
          copy="Please return the headset. You can complete the rest of your intake on your phone or tablet."
        />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PatientHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hideNav: [0, [3, 12]],
  },
};

export const Medications: Story = {
  args: {
    startIndex: 0,
    endIndex: 1,
    hideNav: [],
    hideIntro: true,
  },
};

export const ChiefComplaint: Story = {
  args: {
    startIndex: 2,
    endIndex: 2,
    hideNav: [0],
    hideIntro: true,
  },
};

export const HPI: Story = {
  args: {
    startIndex: 3,
    endIndex: 6,
    hideNav: [[0, 3]],
    hideIntro: true,
  },
};

export const PastHistory: Story = {
  args: {
    startIndex: 12,
    endIndex: 16,
    hideNav: [],
    hideIntro: true,
  },
};
