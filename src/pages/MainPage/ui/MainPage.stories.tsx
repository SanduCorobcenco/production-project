import type { Meta, StoryObj } from '@storybook/react'
import MainPage  from './MainPage'


const meta: Meta<typeof MainPage> = {

  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    
  }
}


type Story = StoryObj<typeof MainPage>

export const Light: Story = {
    render: () => <MainPage  />
   
}
  
  export default meta

 
