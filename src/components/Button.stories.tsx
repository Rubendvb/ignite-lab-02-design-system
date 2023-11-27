import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
