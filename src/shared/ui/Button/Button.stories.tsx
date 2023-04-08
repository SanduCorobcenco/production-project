import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'

const meta: Meta<typeof Button> = {

  title: 'shared/Button',
  component: Button,
  argTypes: {

  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  // eslint-disable-next-line react/no-children-prop
  render: () => <Button children ='text' />

}

export const Clear: Story = {
  args: { children: 'text', theme: 'clear' }
}

export const Outline: Story = {
  render: () => <Button
      // eslint-disable-next-line react/no-children-prop
      children = 'text'
      theme = 'outline'
    />
}

export const Background: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true
  }
}

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}

export const OutlineSizeL: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}
