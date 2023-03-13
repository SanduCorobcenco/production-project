import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: any
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
