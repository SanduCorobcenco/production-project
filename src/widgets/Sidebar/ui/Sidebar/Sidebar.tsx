import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button } from 'shared/ui/Button/Button'
interface SidebarProps {

  className?: any

}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (

      <div
          data-testid='sidebar'
          className={classNames(cls.Sidebar,
            { [cls.collapsed]: collapsed },
            [className])}
        >
          <Button
              data-testid='sidebar-toggle'
              onClick={onToggle}
          >
              {collapsed ? '>' : '<'}
          </Button>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
          </div>

      </div>
  )
}
