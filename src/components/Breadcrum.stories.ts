import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Study Case/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    datas: { control: 'object' },
  },
  args: {
    variant: 'medium',
    datas: [
      {
        title: 'Home',
        path: 'home',
      },
      {
        title: 'Library',
        path: 'library',
      },
      {
        title: 'Data',
        path: 'data',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {
  args: {
    variant: 'medium',
  },
};

export const Custom: Story = {
  args: {
    variant: 'large',
    children: (
      '/'
    ),
  },
};