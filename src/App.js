// IMPORTANT:  always start name of Components with uppercase
// 2 kami: infinite scroll, top-loading bar
import React from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

// learn routing in detail from https://www.geeksforgeeks.org/reactjs-router/
// also check es5 to es6 shifting guide --> https://reacttraining.com/blog/react-router-v6-pre/

const pageSize = 10
// IMPORTANT .env.local file
// IMPORTANT .env.local file must not be in any folder, i.e. outside the folder
// for hiding api key, fetches API_KEY from env.local file; env : environment
const apikey = process.env.REACT_APP_API_KEY

export default function App() {
  
    return(
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes> {/* Switch is replaced by Routes */}

            {/* path: changes the url;
            key: makes the page to reload, without it the path changes but the url remans same  */}

            <Route exact path="/"  element={<News key="home" country="in" api_key={apikey} pageSize={pageSize} category="" /> } />
            <Route exact path="/general" element={<News key="general" country="in" api_key={apikey} pageSize={pageSize} category="general" />} />
            <Route exact path="/business" element={<News key="business" country="in" api_key={apikey} pageSize={pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" api_key={apikey} pageSize={pageSize} category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" country="in" api_key={apikey} pageSize={pageSize} category="health" />} />
            <Route exact path="/science" element={<News key="science" country="in" api_key={apikey} pageSize={pageSize} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" country="in" api_key={apikey} pageSize={pageSize} category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" country="in" api_key={apikey} pageSize={pageSize} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}
