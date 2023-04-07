import type { Meta, StoryObj } from '@storybook/react'
import AboutPage  from './AboutPage'


const meta: Meta<typeof AboutPage> = {

  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    
  }
}


type Story = StoryObj<typeof AboutPage>

export const Light: Story = {
    render: () => <AboutPage  />
   
}
  
  export default meta

 
