import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button';
 
interface LoginFormProps {
 
className?: string;
 
}
 
export const LoginForm = ({className}: LoginFormProps) => {
 
  return (
 
 
<div className={classNames(cls.LoginForm, {}, [className])}>
 <input type='text'className={cls.input} />
 <input type='text'className={cls.input} />
 <Button
    className={cls.loginBtn}
 >
    Login
 </Button>
</div>
  )
};