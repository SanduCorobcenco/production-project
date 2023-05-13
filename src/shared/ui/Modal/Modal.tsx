import React, { useState, type ReactNode, useRef, useEffect, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()
  const ANIMATION_DELAY = 300

  const { theme } = useTheme()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const result = theme !== undefined ? theme as keyof typeof cls : ''

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing

  }
  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className])}>

              <div className={cls.overlay} onClick={closeHandler}>

                  <div className={cls.content}
                      onClick={onContentClick}
                >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}
