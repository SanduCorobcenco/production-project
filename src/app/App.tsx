import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from 'widgets'
import { Suspense, useState } from 'react'

const App = () => {
  const { theme } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className={classNames('app', {}, [])}>
          <Suspense fallback = ''>
              <Navbar />

              <div className='content-page'>
                  <Sidebar/>
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
