import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { Button } from 'shared/ui/Button/Button'
interface PageErrorProps {

  className?: any

}

export const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    location.reload()
  }
  return (

      <div className={classNames(cls.PageError, {}, [className])}>
          <p>Error happenned</p>
          <Button
              onClick={reloadPage}>
              Reload Page
          </Button>
      </div>
  )
}
