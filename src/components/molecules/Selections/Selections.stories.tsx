import type { Meta, StoryObj } from "@storybook/react-vite";

import { chiefComplaints } from "@/mocks/patientHistory";

import { CarouselContext } from "@/hooks/useCarousel";

import Selections from "./Selections";

const meta = {
  title: "Molecules/Selections",
  component: Selections,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    items: {
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

export const TwoColumns: Story = {
  args: {
    ...chiefComplaints,
    theme: "card",
    columns: "two",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const OneColumn: Story = {
  args: {
    ...chiefComplaints,
    ...TwoColumns.args,
    theme: "list",
    columns: "one",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
