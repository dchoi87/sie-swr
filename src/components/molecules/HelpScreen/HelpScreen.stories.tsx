import type { Meta, StoryObj } from "@storybook/react-vite";

import HelpScreen from "./HelpScreen";

const meta = {
  title: "Molecules/Help Screen",
  component: HelpScreen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof HelpScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
