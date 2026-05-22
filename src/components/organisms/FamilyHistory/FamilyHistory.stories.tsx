import type { Meta, StoryObj } from "@storybook/react-vite";
import image from "@/assets/waiting-room.png";

import FamilyHistory from "./FamilyHistory";

const meta = {
  title: "Organisms/Family History",
  component: FamilyHistory,
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
} satisfies Meta<typeof FamilyHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Blindness",
      },
      {
        title: "Retinal Detachment",
      },
      {
        title: "Amblyopia",
        subtext: "Poor vision in one eye",
      },
      {
        title: "Strabismus",
        subtext: "Crossed or wandering eye",
      },
    ],
    theme: "list",
    columns: "one",
  },
};
