import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import PatientHistory from "./PatientHistory";

const meta = {
  title: "Organisms/Patient History",
  component: PatientHistory,
  tags: ["autodocs", "new"],
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
} satisfies Meta<typeof PatientHistory>;

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
