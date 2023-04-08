import { StoryFn, type StoryObj } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import { type Button } from 'shared/ui/Button/Button'

type Story = StoryObj<typeof Button>
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (

    <div className={`app ${theme}`}>
        {StoryComponent}
    </div>

)
