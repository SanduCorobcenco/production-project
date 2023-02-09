import { Suspense } from 'react';
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';



const App = () => {

  var {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'} >Main Page</Link>
        <Link to={'/about'}>About Page</Link>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
        
      
    </div>
  )
};
 
export default App;



