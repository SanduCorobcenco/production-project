import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
>
        <LoginForm />
    </Modal>

)
