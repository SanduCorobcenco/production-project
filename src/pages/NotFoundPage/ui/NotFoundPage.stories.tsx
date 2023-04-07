import type { Meta, StoryObj } from '@storybook/react'
import {NotFoundPage} from './NotFoundPage'


const meta: Meta<typeof NotFoundPage> = {

  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    
  }
}


type Story = StoryObj<typeof NotFoundPage>

export const Light: Story = {
    render: () => <NotFoundPage  />
   
}
  
  export default meta

 
