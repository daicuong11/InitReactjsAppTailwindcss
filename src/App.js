import './index.css';
import React, { Fragment } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';

import { publicRoutes, privateRoutes } from './routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = HomeLayout;
          if (route.layout) {
            Layout = route.layout;
          }
          else if( route.layout === null) {
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
