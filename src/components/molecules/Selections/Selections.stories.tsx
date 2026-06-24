import type { Meta, StoryObj } from "@storybook/react-vite";

import { chiefComplaints } from "@/mocks/patientHistory";

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
    options: {
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
    ...chiefComplaints,
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
