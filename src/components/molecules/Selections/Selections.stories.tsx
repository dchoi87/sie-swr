import type { Meta, StoryObj } from "@storybook/react-vite";

import { CarouselContext } from "@/hooks/useCarousel";

import Selections from "./Selections";

const meta = {
  title: "Molecules/Selections",
  component: Selections,
  tags: ["autodocs", "new"],
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
  decorators: [
    (Story) => (
      <CarouselContext.Provider
        value={{
          next: () => {},
          prev: () => {},
        }}
      >
        <Story />
      </CarouselContext.Provider>
    ),
  ],
} satisfies Meta<typeof Selections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneColumn: Story = {
  args: {
    heading: "What eye issues are you experiencing today?",
    directions:
      "Please select all that apply. Focus your gaze on the circle to make your selection",
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
    ...OneColumn.args,
    theme: "card",
    columns: "two",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
