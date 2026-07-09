import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import Toast from "./Toast";

const meta = {
  title: "Molecules/Toast Message",
  component: Toast,
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
          position: "relative",
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
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Your Waiting Room is Ready!",
    copy: "Please return the headset. You can complete the rest of your intake on your phone or tablet.",
  },
};
