import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {

  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    
  }
}


type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
    render: () => <Sidebar  />
   
}


export const Dark: Story = {
    args: { },
  }
  
  export default meta

 
