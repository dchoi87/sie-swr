import type { Meta, StoryObj } from "@storybook/react-vite";

import ContentBlock from "./ContentBlock";

import { CarouselContext } from "@/hooks/useCarousel";

const meta = {
  title: "Molecules/Content Block",
  component: ContentBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <CarouselContext.Provider
        value={{
          next: () => {},
          prev: () => {},
        }}
      >
        <div
          style={{
            width: "800px",
          }}
        >
          <Story />
        </div>
      </CarouselContext.Provider>
    ),
  ],
} satisfies Meta<typeof ContentBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Lorem Ipsum Dolor Sit",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const WithCTA: Story = {
  args: {
    ...Default.args,
    cta: "Continue",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
