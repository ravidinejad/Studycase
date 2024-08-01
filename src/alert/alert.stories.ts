import type { Meta, StoryObj } from '@storybook/react';
import Toast, { ToastProps } from './alert';

const meta: Meta<typeof Toast> = {
  title: 'Study Case/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['information', 'notification'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['success', 'danger', 'warning'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    title: { control: 'text' },
    message: { control: 'text' },
    onClose: { action: 'closed' },
  },
  args: {
    type: 'information',
    variant: 'success',
    size: 'medium',
    title: 'Success',
    message: 'Data anda sukses dikirim!',
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const InformationSuccess: Story = {
  args: {
    type: 'information',
    variant: 'success',
    title: 'Success',
    message: 'Data anda sukses dikirim!',
  },
};

export const InformationWarning: Story = {
  args: {
    type: 'information',
    variant: 'warning',
    title: 'Warning',
    message: 'Periksa kembali data anda!',
  },
};

export const InformationDanger: Story = {
  args: {
    type: 'information',
    variant: 'danger',
    title: 'Error',
    message: 'Terjadi kesalahan dalam pengiriman data!',
  },
};

export const Notification: Story = {
  args: {
    type: 'notification',
    variant: 'success',
    title: 'Notification',
    message: 'Notifikasi berhasil dikirim!',
  },
};

export const CustomSize: Story = {
  args: {
    type: 'information',
    variant: 'success',
    size: 'large',
    title: 'Success',
    message: 'Data anda sukses dikirim!',
  },
};
