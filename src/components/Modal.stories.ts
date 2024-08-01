import { StoryObj, Meta } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Study Case/Modal',
  component: Modal,
  args: {
    isOpen: false, 
    onClose: () => {}, 
    onSubmit: () => {}, 
    title: 'Remark',
    description: 'Input Remark',
    type: 'rounded',
    size: 'medium',
    position: 'center',
    positiveLabel: 'Submit',
    negativeLabel: 'Cancel',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    onSubmit: { action: 'submitted' },
    title: { control: 'text' },
    description: { control: 'text' },
    type: { control: { type: 'radio', options: ['rounded', 'simple'] } },
    size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    position: { control: { type: 'radio', options: ['center', 'left'] } },
    positiveLabel: { control: 'text' },
    negativeLabel: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const RoundedSmall: Story = {
  args: {
    isOpen: true,
    title: 'Modal Kecil Bulat',
    description: 'Ini adalah konten modal kecil dengan bentuk bulat.',
    type: 'rounded',
    size: 'small',
  },
};