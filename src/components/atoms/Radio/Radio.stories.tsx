import type { Meta, StoryObj } from "@storybook/react-vite";

import { CarouselContext } from "@/hooks/useCarousel";

import Radio from "./Radio";

const meta = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  globals: {
    backgrounds: { value: "dark" },
  },
};
