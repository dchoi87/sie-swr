import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import { steps } from "@/components/templates/Flow/Flow";

import ProgressBar from "./ProgressBar";

const meta = {
  title: "Molecules/Progress Bar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    currentStep: { control: { type: "range", min: 0, max: 6, step: 1 } },
  },
  decorators: [
    (Story, { parameters }) => {
      const background = parameters.background ?? {
        color: "#ffffff",
      };

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "100vh",
            backgroundColor: background.color,
            backgroundImage: background.image ? `url(${background.image})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkBackground = {
  args: {
    steps,
    currentStep: 1,
  },
  parameters: {
    background: {
      color: "#222222",
    },
  },
};

export const ImageBackground: Story = {
  args: {
    ...DarkBackground.args,
  },
  parameters: {
    background: {
      image: image,
    },
  },
};
