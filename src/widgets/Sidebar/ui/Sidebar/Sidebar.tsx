import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/Vector.svg'
import AboutIcon from 'shared/assets/icons/clarity_list-outline-badged.svg'
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
              className={cls.collapsedBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              size={ButtonSize.L}
              square
          >
              {collapsed ? '>' : '<'}
          </Button>

          <div className={cls.items}>
              <div >

                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.main}
                      className={cls.item}
                       >
                      <MainIcon className={cls.icon}/>
                      <span className={cls.link}> Main Page</span>

                  </AppLink>

                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.about}
                      className={cls.item}
                       >
                      <AboutIcon className={cls.icon}/>
                      <span className={cls.link}> About Page</span>

                  </AppLink>
              </div>

          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
          </div>

      </div>
  )
}
