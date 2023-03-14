import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {

  className?: any

}

export const Loader = ({ className }: LoaderProps) => {
  return (

      <div className={classNames('lds-ring', {}, [className])}>
          <div className="lds-default"><div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div><div></div><div></div></div>
      </div>
  )
}
