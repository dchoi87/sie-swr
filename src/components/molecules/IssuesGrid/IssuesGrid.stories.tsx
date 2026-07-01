import type { Meta, StoryObj } from "@storybook/react-vite";

import { pastMedicalHistory } from "@/mocks/patientHistory";

import IssuesGrid from "./IssuesGrid";

const meta = {
  title: "Molecules/Issues Grid",
  component: IssuesGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "950px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IssuesGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...pastMedicalHistory,
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
