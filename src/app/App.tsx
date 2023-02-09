import './styles/index.scss'
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';



const App = () => {

  var {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'} >Main Page</Link>
        <Link to={'/about'}>About Page</Link>
       <AppRouter />
        
      
    </div>
  )
};
 
export default App;



