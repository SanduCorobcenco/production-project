import { BrowserRouter } from 'react-router-dom'
import { Loader } from './Loader'
import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Loader> = {

  title: 'shared/Loader',
  component: Loader,
  argTypes: {

  }

}

type Story = StoryObj<typeof Loader>

export const Primary: Story = {
  render: () =>

      <Loader
    />

}

export default meta
