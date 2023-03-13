import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: any
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props
  return (
      <Link
          to={to}
          className={classNames(cls.AppLink, {}, [className, cls[theme]])}
          {...otherProps}
        >
          {children}
      </Link>
  )
}
