import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
  children?: any
  theme?: any

}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])



  return (
      <div className={classNames(cls.Navbar, {}, [className])}>

          <Button
              theme={ButtonTheme.CLEAR_INVERTED}
              className={cls.links}
              onClick={onShowModal}
          > {'Login'}
              </Button>

          <LoginModal
              isOpen={isAuthModal} 
              onClose={onCloseModal}
          
          />

      </div>
  )
}
