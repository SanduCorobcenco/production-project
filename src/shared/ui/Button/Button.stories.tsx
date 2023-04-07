import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {

  title: 'shared/Button',
  component: Button,
  argTypes: {
    
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    render: () => <Button children ='text' />
   
}


export const Clear: Story = {
    args: { children: 'text', theme: 'clear'},
  }
  

export const Outline: Story = {
    render: () => <Button 
    children = 'text' 
    theme = 'outline'
    />
  }
  

 
