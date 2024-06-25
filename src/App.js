import './index.css';
import React, { Fragment } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';

import { publicRoutes, privateRoutes } from './routes';
import { useEffect } from 'react';
import { actions, useGlobalContext } from './context';


function App() {

  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      dispatch(actions.setTheme('light'));
    } else {
      dispatch(actions.setTheme('dark'));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = HomeLayout;
          if (route.layout) {
            Layout = route.layout;
          }
          else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return <Route key={index} path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>}
          />
        })}
        <Route path='/admin' element={<HomeLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
