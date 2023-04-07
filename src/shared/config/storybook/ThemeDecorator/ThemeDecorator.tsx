import { StoryFn, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button/Button'


type Story = StoryObj<typeof Button>
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (


<div className={`app ${theme}`}>
   {StoryComponent}
</div>


)


