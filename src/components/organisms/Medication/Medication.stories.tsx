import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import Medication from "./Medication";

const meta = {
  title: "Organisms/Medication",
  component: Medication,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    data: {
      table: {
        category: "Grid",
      },
    },
    columns: {
      control: "radio",
      options: ["one", "two"],
      table: {
        category: "Grid",
      },
    },
    theme: {
      control: "radio",
      options: ["list", "card"],
      table: {
        category: "Item",
      },
    },
  },
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
} satisfies Meta<typeof Medication>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Vision Change",
        subtext: "Lorem ipsum dolor sit amet consectetur",
      },
      {
        title: "Flashes / Floaters",
      },
      {
        title: "Pain / Discomfort",
      },
      { title: "Dry Eyes", subtext: "Lorem ipsum dolor sit amet consectetur" },
      {
        title: "Redness / Irritation",
      },
      { title: "Injury", subtext: "Lorem ipsum dolor sit amet consectetur" },
    ],
    theme: "card",
    columns: "two",
  },
};
