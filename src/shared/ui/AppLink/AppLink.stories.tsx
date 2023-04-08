import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { BrowserRouter } from 'react-router-dom'

const meta: Meta<typeof AppLink> = {

  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {

  },
  args: {
    to: '/'
  }
}

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  render: () =>
      <BrowserRouter>
          <AppLink
              to='/'
              children='text '
              theme={AppLinkTheme.PRIMARY}
    />
      </BrowserRouter>

}

export const Secondary: Story = {
  render: () =>
      <BrowserRouter>
          <AppLink
              to='/'
              children='text '
              theme={AppLinkTheme.SECONDARY}
    />
      </BrowserRouter>

}

export default meta
