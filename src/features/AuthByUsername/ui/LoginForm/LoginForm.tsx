import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
 
interface LoginFormProps {
 
className?: string;
 
}
 
export const LoginForm = ({className}: LoginFormProps) => {
 
  return (
 
 
<div className={classNames(cls.LoginForm, {}, [className])}>
 <Input
      autofocus 
      type='text'
      className={cls.input} 
      placeholder={"username"}
      />
 <Input 
      type='text'
      className={cls.input} 
      placeholder={"password"}
      />
 <Button
    className={cls.loginBtn}
 >
    Login
 </Button>
</div>
  )
};