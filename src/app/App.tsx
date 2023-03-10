import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets';



const App = () => {

  var {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
       
      <AppRouter />


        
      
    </div>
  )
};
 
export default App;



