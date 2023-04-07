import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {

  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    
  }
}


type Story = StoryObj<typeof PageError>

export const Light: Story = {
    render: () => <PageError  />
   
}
  
  export default meta

 
