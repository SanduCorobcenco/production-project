import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {

  className?: any

}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (

      <div className={classNames(cls.NotFoundPage, {}, [className])}>
          <h1>Page Not Found</h1>
      </div>
  )
}
