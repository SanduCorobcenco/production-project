import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { BrowserRouter } from 'react-router-dom'
import { ButtonTheme } from 'shared/ui/Button/Button'

const meta: Meta<typeof Navbar> = {

  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {

  }
}

type Story = StoryObj<typeof Navbar>

export const Light: Story = {
  render: () =>
      <BrowserRouter>
          <Navbar />
      </BrowserRouter>
}

export const Dark: Story = {
  render: () =>
      <BrowserRouter>
          <Navbar />
      </BrowserRouter>
}

export const ClearInverted: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.CLEAR_INVERTED
  }
}

export default meta
