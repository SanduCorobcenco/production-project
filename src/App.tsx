import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { LOCAL_STORAGE_THEME_KEY } from './theme/ThemeContext';
import { classNames } from './helpers/classNames/classNames';



const App = () => {

  var {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'} >Main Page</Link>
        <Link to={'/about'}>About Page</Link>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageAsync/>}/>
            <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
        
      
    </div>
  )
};
 
export default App;



