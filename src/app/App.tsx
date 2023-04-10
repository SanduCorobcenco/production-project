import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from 'widgets'
import { Suspense } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

const App = () => {
  const { theme } = useTheme()

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback = ''>
              <Navbar />
              <Modal />
              <div className='content-page'>
                  <Sidebar/>
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
