import type { Meta, StoryObj } from "@storybook/react-vite";

import SelectionsGrid from "./SelectionsGrid";

const meta = {
  title: "Molecules/Selections Grid",
  component: SelectionsGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    data: {
      table: {
        category: "Grid",
      },
    },
    columns: {
      table: {
        category: "Grid",
      },
    },
    theme: {
      table: {
        category: "Item",
      },
    },
  },
} satisfies Meta<typeof SelectionsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneColumn: Story = {
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
    theme: "list",
    columns: "one",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const TwoColumns: Story = {
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
  globals: {
    backgrounds: { value: "dark" },
  },
};
