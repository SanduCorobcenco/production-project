import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: any
  theme?: any

}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (

      <button className={classNames(cls.Button,
        { [cls[theme]]: true }, [className])}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        >
          {children}
      </button>
  )
}
