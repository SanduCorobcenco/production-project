import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface NavbarProps {
  className?: string
  children?: any
  theme?: any

}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>

          <Button
              theme={ButtonTheme.CLEAR_INVERTED}
              className={cls.links}
              onClick={onToggleModal}
          > click me
              /</Button>

          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, quod illo. Harum exercitationem saepe
              quaerat minus corporis ad eveniet consequuntur,
              ducimus eos quia recusandae quis porro beatae veritatis asperiores at.
          </Modal>

      </div>
  )
}
